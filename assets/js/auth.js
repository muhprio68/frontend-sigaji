const Auth = {
    // Di auth.js, update fungsi login-nya:
    login: async function(username, password) {
        try {
            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('sigaji_token', data.token);
                // 🔥 SIMPAN DATA USER DISINI (Data dari backend lu)
                localStorage.setItem('user_data', JSON.stringify(data.user)); 
                window.location.href = 'index.html';
            } else {
                alert(data.error || "Login gagal!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Tidak dapat terhubung ke server backend.");
        }
    },

    // 2. Fungsi Logout
    logout: function() {
        localStorage.removeItem('sigaji_token');
        window.location.href = 'login.html';
    },

    // 3. Fungsi Ambil Token (Buat diselipin tiap kali fetch data)
    getToken: function() {
        return localStorage.getItem('sigaji_token');
    },

    // 4. Satpam Frontend (Dipanggil di index.html)
    check: function() {
        const token = this.getToken();
        if (!token) {
            // Kalau nggak ada token, tendang ke login
            window.location.href = 'login.html';
        }
    },

    // 5. Cegah user balik ke halaman login kalau udah punya token
    redirectIfLoggedIn: function() {
        const token = this.getToken();
        if (token) {
            window.location.href = 'index.html';
        }
    }
};