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
                1. Vì sao sự giàu có của chủ nghĩa tư bản không thể xóa bỏ tính tất yếu của chủ nghĩa xã hội?
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
                2. Sự khác biệt giữa "Lý tưởng mơ hồ" và "Sự tất yếu khoa học"
              </h2>
              <p className="section-intro">
                Các nguồn tài liệu phân biệt giữa Chủ nghĩa xã hội không tưởng (lý tưởng mơ hồ) và Chủ nghĩa xã hội khoa học 
                (sự tất yếu khoa học) dựa trên quan điểm của họ về tương lai.
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
                  <h3 className="comparison-title">Tất yếu khoa học</h3>
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
                Với Việt Nam, CNXH không chỉ là khẩu hiệu mà là mục tiêu phát triển và hệ định hướng chính sách đã được cụ thể hóa trong Cương lĩnh 2011 (8 đặc trưng + 8 phương hướng) và lựa chọn quá độ bỏ qua chế độ TBCN.
              </p>

              <div className="vietnam-content">
                <div className="vietnam-item">
                  <h3 className="vietnam-item-title">(a) CNXH là "đích đến giá trị" cụ thể cho mô hình phát triển</h3>
                  <p className="vietnam-item-content">
                    Được diễn đạt thành mục tiêu xã hội: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh".
                  </p>
                  <p className="vietnam-item-content">
                    Gắn phát triển kinh tế với phát triển con người, văn hóa, và công bằng xã hội (không coi tăng trưởng là mục tiêu duy nhất).
                  </p>
                </div>

                <div className="vietnam-item">
                  <h3 className="vietnam-item-title">(b) CNXH là "khung tổ chức" để vừa phát triển kinh tế vừa giữ định hướng xã hội</h3>
                  <p className="vietnam-item-content">
                    Kinh tế thị trường định hướng XHCN: thừa nhận động lực thị trường để phát triển lực lượng sản xuất, nhưng hướng đến quan hệ sản xuất tiến bộ phù hợp, giảm bất công, bảo đảm an sinh, và mở rộng cơ hội cho đa số.
                  </p>
                  <p className="vietnam-item-content">
                    Điểm này phù hợp với luận điểm "CNTB tạo tiền đề vật chất nhưng cần thời gian tổ chức lại để phục vụ toàn xã hội".
                  </p>
                </div>

                <div className="vietnam-item">
                  <h3 className="vietnam-item-title">(c) CNXH là cơ sở cho xây dựng nhà nước và dân chủ</h3>
                  <p className="vietnam-item-content">
                    Việt Nam xác định xây dựng Nhà nước pháp quyền XHCN của nhân dân, do nhân dân, vì nhân dân, do Đảng lãnh đạo.
                  </p>
                  <p className="vietnam-item-content">
                    Đây là cách thể chế hóa đặc trưng "nhân dân lao động làm chủ", tạo công cụ để thực hiện các mục tiêu công bằng, đoàn kết, ổn định xã hội trong thời kỳ quá độ.
                  </p>
                </div>

                <div className="vietnam-item">
                  <h3 className="vietnam-item-title">(d) "Bỏ qua chế độ TBCN" là bỏ qua sự thống trị của quan hệ sản xuất TBCN, nhưng không bỏ qua thành tựu</h3>
                  <p className="vietnam-item-content">
                    Ý nghĩa thực tiễn là: tiếp thu khoa học–công nghệ, quản trị, thành tựu văn minh để "đi nhanh" về lực lượng sản xuất, nhưng không đặt mục tiêu xã hội dưới sự chi phối tuyệt đối của tư hữu tư bản.
                  </p>
                  <p className="vietnam-item-content">
                    Điều này khớp với định hướng: công nghiệp hóa–hiện đại hóa, kinh tế tri thức, bảo vệ môi trường, đối ngoại hòa bình–hợp tác.
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
