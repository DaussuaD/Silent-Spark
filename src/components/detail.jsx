import React from 'react';
import '../assets/css/detail.css'


const Detail = () => {
  return (
    <div className="class-detail">
      <div className="class-header">
        <h2>Hi, Ayu Anindya! 👋</h2>
      </div>
      <div className="class-content">
        <div className="class-access">
          <h3>Akses Kelas</h3>
          <div className="class-topic">
            <p><strong>Topik:</strong> Memahami macam isyarat (rayanda, ASL, BISINDO)</p>
            <p><strong>Zoom:</strong> <a href="https://us05web.zoom.us/j/84678954882?pwd=QU1Ncnh3V3BWTmtDdDdWVmNpNkcyaQT09">Link Zoom</a></p>
          </div>
        </div>
        <div className="class-tasks">
          <h3>Tugas Saya</h3>
          <div className="task">
            <h4>TUGAS 1</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <p><strong>Diberikan:</strong> 19 Mei 2024</p>
            <p><strong>Batas Waktu:</strong> 19 Mei 2024</p>
            <div className="task-upload">
              <label>File:</label>
              <input type="file" />
            </div>
            <div className="task-link">
              <label>Link:</label>
              <input type="text" />
            </div>
            <button className="kbtn">Kirim</button>
          </div>
          <div className="task">
            <h4>TUGAS 2</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <p><strong>Diberikan:</strong> 26 Mei 2024</p>
            <p><strong>Batas Waktu:</strong> 26 Mei 2024</p>
            <div className="task-upload">
              <label>File:</label>
              <input type="file" />
            </div>
            <div className="task-link">
              <label>Link:</label>
              <input type="text" />
            </div>
            <button className="kbtn">Kirim</button>
          </div>
        </div>
        <div className="class-profile">
          <img src="https://via.placeholder.com/150" alt="Instructor" />
          <p><strong>Nama:</strong> Bianca Salvador</p>
          <p><strong>Umur:</strong> 30</p>
          <p><strong>Bahasa:</strong> Indonesia | Inggris</p>
          <p><strong>Periode:</strong> 1</p>
          <p><strong>Jumlah Pertemuan:</strong> 26</p>
          <p><strong>Jumlah Kelas:</strong> 4</p>
          <p><strong>Jumlah Tugas:</strong> 8</p>
          <p><strong>Bergabung pada:</strong> 1 Juni 2024</p>
          <a href="mailto:biancasalvador@gmail.com">biancasalvador@gmail.com</a>
          <button>WhatsApp</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
