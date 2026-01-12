import './InfoPage.css';
import './AppendixPage.css';

export default function AppendixPage() {
  return (
    <div className="appendix-page">
      <div className="appendix-content">
        <h1 className="appendix-title">Phụ lục</h1>
        <p className="appendix-subtitle">Thông tin trích nguồn</p>

        <div className="appendix-sections">
          {/* Lý thuyết */}
          <section className="appendix-section">
            <h2 className="section-title">Lý thuyết</h2>
            <div className="source-item">
              <div className="source-label">Nội dung:</div>
              <div className="source-content">
                Giáo trình Chủ nghĩa xã hội khoa học (Chương 3: Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội).
              </div>
            </div>
            <div className="source-item">
              <div className="source-label">Hình ảnh:</div>
              <div className="source-content">
                Thư Viện Pháp Luật, Báo Lâm Đồng, Báo điện tử Đảng Cộng sản Việt Nam, Google Image
              </div>
            </div>
            <div className="source-item">
              <div className="source-label">Tóm tắt:</div>
              <div className="source-content">
                AI (Chat GPT)
              </div>
            </div>
          </section>

          {/* Vận dụng */}
          <section className="appendix-section">
            <h2 className="section-title">Vận dụng</h2>
            <div className="source-item">
              <div className="source-label">Câu hỏi 1:</div>
              <div className="source-content">
                Giáo trình + AI (Chat GPT, Gemini)
              </div>
            </div>
            <div className="source-item">
              <div className="source-label">Câu hỏi 2:</div>
              <div className="source-content">
                Giáo trình + AI (Chat GPT)
              </div>
            </div>
            <div className="source-item">
              <div className="source-label">Câu hỏi 3:</div>
              <div className="source-content">
                Giáo trình + Báo Nhân dân + AI (Chat GPT)
              </div>
            </div>
          </section>

          {/* Triển lãm 3D */}
          <section className="appendix-section">
            <h2 className="section-title">Triển lãm 3D</h2>
            
            <div className="source-item">
              <div className="source-label">Nội dung:</div>
              <div className="source-content">
                Giáo trình + AI (Chat GPT)
              </div>
            </div>

            <div className="source-item">
              <div className="source-label">Hình ảnh:</div>
              <div className="source-content">
                Báo Tuổi trẻ, Báo Thanh niên, Báo Dân trí, Thông tấn xã Việt Nam, Thông tin Chính phủ, Báo Quân đội nhân dân, Statista, IMF, WHO, Trendswatch.co, Google Image
              </div>
            </div>

            <div className="source-item">
              <div className="source-label">Video: Youtube</div>
              <div className="source-content">
                <div className="video-links">
                  <a 
                    href="https://www.youtube.com/watch?v=tZxrCqv20XI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="video-link"
                  >
                    https://www.youtube.com/watch?v=tZxrCqv20XI
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=IIKCN5wZeqA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="video-link"
                  >
                    https://www.youtube.com/watch?v=IIKCN5wZeqA
                  </a>
                  <a 
                    href="https://www.youtube.com/watch?v=QPKKQnijnsM&list=PPSV" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="video-link"
                  >
                    https://www.youtube.com/watch?v=QPKKQnijnsM&list=PPSV
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Thành viên nhóm */}
          <section className="appendix-section">
            <h2 className="section-title">Thành viên nhóm</h2>
            <div className="source-item">
              <div className="source-content">
                <div className="member-list">
                  <div className="member-item">SS180910 - Đỗ Trí Hiếu (Leader)</div>
                  <div className="member-item">SE183332 - Tống Hồng Quân</div>
                  <div className="member-item">SE183314 - Đinh Vương Thiên Tứ</div>
                  <div className="member-item">SS180055 - Đặng Thành Phước</div>
                  <div className="member-item">SA170133 - Vũ Thị Minh Phương</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
