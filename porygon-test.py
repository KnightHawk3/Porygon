import porygon
import unittest
import os
import tempfile

class BasicTestCase(unittest.TestCase):

    def test_index(self):
        """Initial test. Ensure flask was set up correctly"""
        tester = porygon.app.test_client(self)
        response = tester.get('/', content_type='html/text')
        self.assertEqual(response.status_code, 200)

    def test_database(self):
        """Initial test. Ensure that the database exists"""
        tester = os.path.exists("porygon.db")
        self.assertEqual(tester, True)

class PorygonTestCase(unittest.TestCase):

    def setUp(self):
        """Set up a blank temp database before each test"""
        self.db_fd, porygon.app.config['DATABASE'] = tempfile.mkstemp()
        porygon.app.config['TESTING'] = True
        self.app = porygon.app.test_client()
        porygon.init_db()

    def tearDown(self):
        """Destroy blank temp database after each test"""
        os.close(self.db_fd)
        os.unlink(porygon.app.config['DATABASE'])

    def login(self, username, password):
        """Login helper function"""
        return self.app.post('/login', data=dict(
            username=username,
            password=password
        ), follow_redirects=True)

    def logout(self):
        """Logout helper function"""
        return self.app.get('/logout', follow_redirects=True)

    # Assert Functions

    def test_empty_db(self):
        """Ensure database is blank"""
        rv = self.app.get('/')
        assert b'No entries here so far' in rv.data

    def test_login_logout(self):
        """Test login and logout using helper functions"""
        rv = self.login(porygon.app.config['USERNAME'],porygon.app.config['PASSWORD'])
        assert b'You were logged in' in rv.data
        rv = self.logout()
        assert b'You were logged out' in rv.data
        rv = self.login(porygon.app.config['USERNAME'] + 'x',porygon.app.config['PASSWORD'])
        assert b'Invalid username' in rv.data
        rv = self.login(porygon.app.config['USERNAME'],porygon.app.config['PASSWORD'] + 'x')
        assert b'Invalid password' in rv.data


if __name__ == '__main__':
    unittest.main()
