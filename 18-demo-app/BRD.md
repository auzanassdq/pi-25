# FitQuest – Gamified Fitness Challenge (Phase 1)

## 🧩 Problem
- Banyak orang cepat bosan dengan rutinitas olahraga.  
- Motivasi menurun kalau latihan sendirian tanpa kompetisi.  
- Sulit melacak progres dengan cara yang seru dan memotivasi.  

## 💡 Solusi
Aplikasi web berbasis **challenge** dengan sistem **poin, level, dan badge**.  
User bisa ikut challenge harian/mingguan, track progres, dapat reward virtual, dan merasa seperti bermain game.  

## 👥 Target User
- Orang umum yang ingin olahraga tapi butuh motivasi tambahan.  
- Fitness enthusiast yang suka tantangan & kompetisi.  
- Komunitas gym / kelompok olahraga kecil.  

**Alasan user mau pakai:** Olahraga jadi terasa fun, interaktif, dan lebih konsisten.  

## ⚡ Fitur Utama (Phase 1)
1. **Challenge Harian & Mingguan** – User bisa memilih challenge yang sudah tersedia.  
2. **Tracking Progress** – Input manual jumlah reps, jarak, atau waktu.  
3. **XP & Badge** – Dapatkan XP untuk naik level dan kumpulkan badge.  
4. **Profile** – Lihat statistik & badge yang sudah diperoleh. 

## stack
- Nextjs app router
- tailwindcss
- shadcn


---

## 📱 Detail Halaman (Mobile-first)

### 1. Landing Page (public)
- **Hero Section**  
  - Judul: “Ubah Olahraga Jadi Seru dengan FitQuest 💪🔥”  
  - CTA: [Mulai Gratis]  
  - Ilustrasi karakter fitness (gamified).  

- **Fitur Section**  
  - Card 1: “Challenge Harian”  
  - Card 2: “Earn XP & Badge”  
  - Card 3: “Track Progress”  

- **Testimoni**  
  - “Dulu males olahraga, sekarang jadi ketagihan karena ada poin dan level.” – Andi, 25th  
  - “Serasa main game, tapi hasilnya badan lebih sehat.” – Sari, 28th  

- **Footer**  
  - Link: About | FAQ | Contact  
  - Social media icon  

---

### 2. Sign Up / Login Page
- **Form Input:** Nama, Email, Password  
- **CTA Button:** “Bergabung Sekarang”  
- Opsi login cepat (Google/Apple).  

---

### 3. Dashboard / Home (setelah login)
- **Header:** Halo, [Nama User]!  
- **Daily Challenge (Card utama)**  
  - Contoh: "30 Push-up Hari Ini"  
  - Progress bar [0/30]  
  - Tombol: [Tandai Selesai]  

- **Weekly Challenge (Card kedua)**  
  - Contoh: "Total 5 KM Lari Minggu Ini"  
  - Progress bar [2/5 KM]  

- **XP & Badge Section**  
  - XP: 120 XP (Level 2)  
  - Badge: “🔥 3 Days Streak”  

---

### 4. Challenge Detail Page
- **Judul Challenge:** “30 Push-up Hari Ini”  
- **Deskripsi:** Selesaikan 30 push-up untuk dapat 10 XP  
- **Progress Input:** angka reps yang sudah dilakukan  
- **Progress Bar:** update otomatis  
- **CTA Button:** [Selesaikan Challenge]  

---

### 5. Profile / Progress Page
- **Avatar user**  
- **Nama + Level (contoh: Level 2 – Fit Explorer)**  
- **Statistik:**  
  - Total Challenge Selesai: 15  
  - Streak Terpanjang: 7 hari  
  - Total XP: 320 XP  

- **Badge Collection:** grid berisi ikon badge yang sudah diperoleh.  

---

## 📊 Mock Data (JSON)
```json
{
  "users": [
    {
      "id": 1,
      "name": "Auzan",
      "email": "auzan@mail.com",
      "level": 2,
      "xp": 120,
      "streak": 3,
      "badges": ["🔥 3 Days Streak", "💪 First Challenge Done"]
    }
  ],
  "challenges": [
    {
      "id": 101,
      "title": "30 Push-up Hari Ini",
      "type": "daily",
      "target": 30,
      "unit": "reps",
      "reward_xp": 10
    },
    {
      "id": 102,
      "title": "Lari 5 KM Minggu Ini",
      "type": "weekly",
      "target": 5,
      "unit": "km",
      "reward_xp": 50
    }
  ],
  "progress": [
    {
      "user_id": 1,
      "challenge_id": 101,
      "progress": 20,
      "status": "in_progress"
    },
    {
      "user_id": 1,
      "challenge_id": 102,
      "progress": 2,
      "status": "in_progress"
    }
  ]
}
