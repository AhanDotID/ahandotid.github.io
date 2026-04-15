<div align="center">

```
 ██████╗██╗ █████╗ ███╗   ██╗     ██╗██╗   ██╗██████╗ ███████╗███████╗ ██████╗
██╔════╝██║██╔══██╗████╗  ██║     ██║██║   ██║██╔══██╗██╔════╝██╔════╝██╔════╝
██║     ██║███████║██╔██╗ ██║     ██║██║   ██║██████╔╝███████╗█████╗  ██║
██║     ██║██╔══██║██║╚██╗██║██   ██║██║   ██║██╔══██╗╚════██║██╔══╝  ██║
╚██████╗██║██║  ██║██║ ╚████║╚█████╔╝╚██████╔╝██║  ██║███████║███████╗╚██████╗
 ╚═════╝╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝ ╚═════╝
```

### `~/AhanDotID` — Portfolio

[![Live](https://img.shields.io/badge/Live-ahandotid.github.io-39ff14?style=flat-square&logo=github&logoColor=black&labelColor=0d1117)](https://ahandotid.github.io)
[![Status](https://img.shields.io/badge/Status-Active-39ff14?style=flat-square&labelColor=0d1117)](https://ahandotid.github.io)
[![Built with](https://img.shields.io/badge/Built_with-HTML%2FCSS%2FJS-00e5ff?style=flat-square&labelColor=0d1117)](https://ahandotid.github.io)
[![Community](https://img.shields.io/badge/Community-CianjurSec-ffd32a?style=flat-square&labelColor=0d1117)](#)

</div>

---

```bash
$ whoami
Ahan Pahlevi

$ cat about.txt
> Role       : Cybersecurity Enthusiast | CTF Player | Penetration Tester
> Background : Data Operations | Office Administration | BPS National Survey
> Language   : Indonesian (Native) · German B1 · English
> Platform   : HackTheBox | TryHackMe | CTFtime | Hacker1 | Bugcrowd
> Status     : [✔] Open to national & international opportunities
```

---

## 📁 Struktur

```
ahandotid.github.io/
│
├── 📄 index.html              # Home & About
├── 📄 writeups.html           # Writeups & Research
├── 📄 projects.html           # Projects
├── 📄 contact.html            # Contact
│
├── 📂 css/
│   └── style.css              # Dark terminal aesthetic
│
├── 📂 js/
│   └── main.js                # Typing effect, filter, animasi
│
├── 📂 writeups/
│   └── nama-challenge.html    # Artikel writeup per challenge
│
└── 📂 assets/
    ├── avatar.jpg             # Foto profil
    ├── saweria-qr.png         # QR donasi Saweria
    └── favicon.ico            # Icon tab browser
```

---

## ⚡ Fitur

| Fitur | Keterangan |
|-------|------------|
| 🖥️ **Terminal Aesthetic** | Dark mode dengan scanlines & efek CRT |
| ✍️ **Typing Effect** | Auto-type role di hero section |
| 🔍 **Filter Writeups** | Sort by Web / Pwn / Crypto / RE / OSINT / Misc / etc|
| 📊 **Stats Counter** | Animasi counter CTF solved, writeups, dll |
| ✨ **Glitch Effect** | Efek glitch pada nama di hero |
| ☕ **Saweria Support** | QR donasi terintegrasi di halaman contact |
| 📱 **Responsive** | Mobile-friendly |
| ⚡ **Zero Framework** | Pure HTML/CSS/JS, no dependencies |

---

## 🛡️ Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=flat-square&logo=github&logoColor=white)

---

## 📝 Cara Tambah Writeup Baru

**1. Buat file artikel di folder `writeups/`**

Copy template ini, rename jadi `nama-challenge.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>JUDUL — Ahan Pahlevi</title>
  <link rel="stylesheet" href="../css/style.css" />
</head>
<body>
  <!-- isi konten writeup -->
</body>
</html>
```

**2. Tambah card di `writeups.html`**

```html
<div class="card" data-category="web">
  <div class="card-meta">
    <span class="card-category cat-web">Web</span>
    <span class="card-date">Apr 2025</span>
  </div>
  <div class="card-title">Nama Challenge</div>
  <div class="card-desc">Deskripsi singkat...</div>
  <div class="card-footer">
    <span class="card-event">Nama CTF</span>
    <a href="writeups/nama-challenge.html" class="card-link">Read →</a>
  </div>
</div>
```

**Kategori yang tersedia:**

| Class | Label |
|-------|-------|
| `cat-web` | Web |
| `cat-pwn` | Pwn |
| `cat-crypto` | Crypto |
| `cat-re` | Rev. Eng |
| `cat-misc` | Misc |
| `cat-osint` | OSINT |

---

## 🛠️ Cara Tambah Project Baru

Tambah card ini di `projects.html`:

```html
<div class="project-card" data-category="tool">
  <div>
    <div class="project-name">
      <span>🔧</span>
      <a href="https://github.com/ahandotid/NAMA-REPO" target="_blank">nama-project</a>
    </div>
    <div class="project-desc">Deskripsi project kamu.</div>
    <div class="project-tags">
      <span class="project-tag">Python</span>
      <span class="project-tag">Security</span>
    </div>
  </div>
  <div class="project-links">
    <a href="https://github.com/ahandotid/NAMA-REPO" target="_blank" class="icon-btn">GitHub →</a>
  </div>
</div>
```

**Kategori project:** `tool` · `script` · `research`

---

## 🔄 Update Website

```bash
# Edit file yang ingin diubah, lalu:
git add .
git commit -m "✏️ Deskripsi perubahan"
git push

# Website update otomatis dalam 1-2 menit!
```

---

## 🎨 Kustomisasi Warna

```css
:root {
  --bg:     #080b0f;   /* background */
  --green:  #39ff14;   /* aksen utama */
  --cyan:   #00e5ff;   /* aksen sekunder */
  --red:    #ff4757;   /* pwn / error */
  --yellow: #ffd32a;   /* crypto / warning */
}
```

---

<div align="center">

```
[★] ahandotid.github.io — built with ♥ & caffeine | CianjurSec
```

[![Visit](https://img.shields.io/badge/🌐_Visit_Website-ahandotid.github.io-39ff14?style=for-the-badge&labelColor=0d1117)](https://ahandotid.github.io)
[![Saweria](https://img.shields.io/badge/☕_Support-saweria.co/ahandotid-ff813f?style=for-the-badge&labelColor=0d1117)](https://saweria.co/ahandotid)

</div>
