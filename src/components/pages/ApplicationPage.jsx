import './ApplicationPage.css';

export default function ApplicationPage() {
  return (
    <div className="application-page">
      {/* ORNAMENT ĐẶT NGAY DƯỚI NAVBAR */}
      <div className="historical-ornament top-ornament">
        <div className="ornament-line"></div>
        <div className="ornament-center">✦</div>
        <div className="ornament-line"></div>
      </div>

      <div className="application-container">
        <div className="application-header">
          <h1 className="application-title">Vận dụng</h1>
          <p className="application-subtitle">
            Áp dụng lý thuyết chủ nghĩa xã hội khoa học vào thực tiễn
          </p>
        </div>

        <div className="application-content">
          {/* Phần 1 */}
          <section className="application-section">
            <div className="section-card">
              <h2 className="section-title">
                1. Vì sao sự giàu có của chủ nghĩa tư bản không thể phủ nhận tính tất yếu của chủ nghĩa xã hội
              </h2>
              
              <div className="content-item">
                <h3 className="item-title">• Sự dai dẳng của bóc lột</h3>
                <p className="item-content">
                  Sự giàu có của chủ nghĩa tư bản được xây dựng trên sự chiếm đoạt giá trị thặng dư từ giai cấp công nhân. 
                  Ngay cả khi một số quốc gia đạt được "tầng lớp trung lưu" và cải thiện mức sống, người lao động vẫn là người làm công ăn lương, 
                  sinh kế phụ thuộc vào chủ sở hữu tư bản.
                </p>
              </div>

              <div className="content-item">
                <h3 className="item-title">• Bất bình đẳng và xung đột cố hữu</h3>
                <p className="item-content">
                  Bất chấp những tiến bộ công nghệ, khoảng cách giữa lợi ích của giai cấp tư sản (chủ sở hữu) và giai cấp vô sản (công nhân) 
                  vẫn tồn tại đối kháng. Các nguồn tin cho rằng những thành tựu của chủ nghĩa tư bản trong quản lý và khoa học là "tiền đề vật chất" 
                  thực sự giúp quá trình chuyển đổi sang chủ nghĩa xã hội trở nên chín muồi hơn, chứ không phải là không cần thiết.
                </p>
              </div>

              <div className="content-item">
                <h3 className="item-title">• Giới hạn về cấu trúc</h3>
                <p className="item-content">
                  Quyền sở hữu tư nhân cuối cùng trở thành "còng tay" kìm hãm sự phát triển hơn nữa của lực lượng sản xuất, 
                  dẫn đến khủng hoảng kinh tế và bất ổn xã hội mà chủ nghĩa tư bản không thể giải quyết trong khuôn khổ của chính nó.
                </p>
              </div>
            </div>
          </section>

          {/* Phần 2 */}
          <section className="application-section">
            <div className="section-card">
              <h2 className="section-title">
                2. Sự khác biệt giữa "Lý tưởng mơ hồ" và "Sự cần thiết khoa học"
              </h2>
              <p className="section-intro">
                Các nguồn tài liệu phân biệt giữa Chủ nghĩa xã hội không tưởng (lý tưởng mơ hồ) và Chủ nghĩa xã hội khoa học 
                (sự cần thiết khoa học) dựa trên quan điểm của họ về tương lai.
              </p>

              <div className="comparison-grid">
                <div className="comparison-card">
                  <h3 className="comparison-title">Lý tưởng mơ hồ (Chủ nghĩa không tưởng)</h3>
                  <p className="comparison-content">
                    Các nhà tư tưởng xã hội chủ nghĩa thời kỳ đầu (như Saint-Simon, Fourier và Owen) đã chỉ trích đúng đắn 
                    những mặt trái của chủ nghĩa tư bản và mơ ước về một xã hội công bằng hơn. Tuy nhiên, quan điểm của họ "mơ hồ" 
                    vì họ không thể tìm ra quy luật khách quan của sự phát triển xã hội, không xác định được lực lượng cách mạng 
                    (giai cấp công nhân) có khả năng xây dựng một xã hội mới, và không thể vạch ra một con đường thực tế cho sự chuyển đổi xã hội.
                  </p>
                </div>

                <div className="comparison-card">
                  <h3 className="comparison-title">Tính cần thiết khoa học</h3>
                  <p className="comparison-content">
                    Chủ nghĩa xã hội khoa học, do Marx và Engels sáng lập, dựa trên chủ nghĩa duy vật lịch sử và lý thuyết về giá trị thặng dư. 
                    Nó xem sự sụp đổ của chủ nghĩa tư bản và sự thắng lợi của chủ nghĩa xã hội là điều tất yếu như nhau. 
                    Nó mang tính "khoa học" bởi vì nó xác định giai cấp công nhân là chủ thể lịch sử, với vị thế xã hội và kỷ luật 
                    (được mài dũa bởi nền công nghiệp hiện đại) khiến họ trở thành lực lượng duy nhất có khả năng dẫn dắt quá trình chuyển đổi 
                    sang một hình thức xã hội cao hơn.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Phần 3 */}
          <section className="application-section">
            <div className="section-card vietnam-section">
              <div className="vietnam-header">
                <span className="vietnam-icon">
                  <img src="/images/logo_vn.png" />
                </span>
                <h2 className="section-title">
                  3. Ý nghĩa thực tiễn của chủ nghĩa xã hội đối với Việt Nam ngày nay
                </h2>
              </div>
              <p className="section-intro">
                Đối với Việt Nam, việc lựa chọn con đường xã hội chủ nghĩa được xem là lựa chọn duy nhất đúng đắn, 
                phù hợp với quy luật lịch sử và điều kiện đặc thù của dân tộc.
              </p>

              <div className="vietnam-content">
                <div className="vietnam-item">
                  <h3 className="vietnam-item-title">• Mục tiêu và định hướng quốc gia</h3>
                  <p className="vietnam-item-content">
                    Chủ nghĩa xã hội cung cấp một khuôn khổ rõ ràng cho sự phát triển: "Nhân dân thịnh vượng, quốc gia hùng mạnh, 
                    dân chủ, công lý và văn minh". Điều này đảm bảo rằng tăng trưởng kinh tế luôn gắn liền với tiến bộ và công bằng xã hội.
                  </p>
                </div>

                <div className="vietnam-item">
                  <h3 className="vietnam-item-title">• Kế thừa có chọn lọc</h3>
                  <p className="vietnam-item-content">
                    Việc "vượt qua" chủ nghĩa tư bản ở Việt Nam không có nghĩa là bác bỏ những thành tựu của con người. 
                    Thay vào đó, Việt Nam hướng đến việc kế thừa có chọn lọc những thành tựu khoa học, công nghệ và quản lý 
                    được tạo ra dưới thời chủ nghĩa tư bản để xây dựng cơ sở vật chất, kỹ thuật cho chủ nghĩa xã hội.
                  </p>
                </div>

                <div className="vietnam-item">
                  <h3 className="vietnam-item-title">• Chủ quyền nhân dân</h3>
                  <p className="vietnam-item-content">
                    Chủ nghĩa xã hội cung cấp nền tảng để xây dựng một nhà nước pháp quyền xã hội chủ nghĩa, 
                    nơi mọi quyền lực thuộc về nhân dân. Định hướng này khuyến khích "Sự đoàn kết dân tộc vĩ đại", 
                    kết hợp sức mạnh của công nhân, nông dân và trí thức để bảo vệ và phát triển đất nước.
                  </p>
                </div>

                <div className="vietnam-item">
                  <h3 className="vietnam-item-title">• Nền tảng đạo đức và văn hóa</h3>
                  <p className="vietnam-item-content">
                    Nó đóng vai trò như một la bàn để xây dựng một nền văn hóa mới và những con người mới, 
                    đảm bảo rằng các giá trị tinh thần và đạo đức không bị mai một trong quá trình theo đuổi tăng trưởng kinh tế.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
