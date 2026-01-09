import { useState, useRef, useEffect } from 'react';
import './InfoPage.css';

export default function InfoPage() {
  const [showDetail, setShowDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const isTransitioningRef = useRef(false);

  const items = [
    {
      id: 5,
      title: 'Thời kỳ quá độ lên chủ nghĩa xã hội',
      description: 'Thời kỳ quá độ lên CNXH là giai đoạn lịch sử tất yếu diễn ra giữa xã hội cũ (chủ nghĩa tư bản hoặc tiền tư bản) và xã hội xã hội chủ nghĩa. Đây là một thời kỳ lâu dài, phức tạp, có nhiều hình thức và bước đi khác nhau, tùy thuộc vào điều kiện cụ thể của từng quốc gia.',
      image: '/images/xdcnxh_65a5e607f33e7.jpg',
      detail: {
        title: 'Thời kỳ quá độ lên CNXH',
        content: (
          <>
            <h4>
              <b>1. Tính tất yếu của thời kỳ quá độ</b>
            </h4>
            <p>Không thể chuyển ngay từ xã hội cũ sang CNXH hoàn chỉnh vì lực lượng sản xuất, quan hệ sản xuất, trình độ văn hóa – xã hội chưa tương thích.</p>
            <p>Cần có thời gian để:
Cải biến quan hệ sản xuất cũ.
Xây dựng cơ sở vật chất – kỹ thuật của CNXH.
Hình thành con người mới và các giá trị xã hội mới.
</p>

            <h4>
              <b>2. Đặc điểm cơ bản của thời kỳ quá độ</b>
            </h4>
            <p>Tồn tại đan xen nhiều hình thức kinh tế – xã hội: công hữu, tập thể, tư nhân, các thành phần kinh tế khác nhau.            </p>
            <p>Đấu tranh giữa cái cũ và cái mới diễn ra trên tất cả các lĩnh vực: kinh tế, chính trị, tư tưởng, văn hóa.            </p>
            <p>Nhà nước giữ vai trò quan trọng trong việc định hướng phát triển, quản lý xã hội và điều tiết các mối quan hệ lợi ích.</p>

 
            <h4>
              <b>3. Nội dung chủ yếu của thời kỳ quá độ</b>
            </h4>
            <p>Phát triển lực lượng sản xuất, đẩy mạnh công nghiệp hóa, hiện đại hóa.            </p>
            <p>Từng bước xây dựng và hoàn thiện quan hệ sản xuất xã hội chủ nghĩa.</p>
            <p>Xây dựng nhà nước của nhân dân lao động, mở rộng dân chủ.</p>
            <p>Phát triển giáo dục, khoa học, văn hóa; nâng cao đời sống vật chất và tinh thần của nhân dân.            </p>

            <h4>
              <b>4. Ý nghĩa của thời kỳ quá độ</b>
            </h4>
            <p>Thời kỳ quá độ quyết định khả năng hiện thực hóa các mục tiêu của chủ nghĩa xã hội. Thành công hay hạn chế trong giai đoạn này ảnh hưởng trực tiếp đến con đường phát triển lâu dài của mỗi quốc gia lựa chọn con đường xã hội chủ nghĩa</p>
          </>
        ),
        specifications: [
          { label: 'Kết luận', value: 'Chủ nghĩa xã hội là một giai đoạn phát triển lịch sử có cơ sở khoa học và thực tiễn, còn thời kỳ quá độ lên CNXH là quá trình tất yếu, phức tạp và lâu dài nhằm chuẩn bị đầy đủ các điều kiện để xây dựng một xã hội công bằng, tiến bộ và phát triển bền vững.' },
        ]
      }
    },
    {
      id: 1,
      title: 'Chủ nghĩa xã hội',
      topic: 'Giai đoạn đầu của hình thái kinh tế – xã hội cộng sản chủ nghĩa',
      description: 'Theo học thuyết Mác – Lênin, chủ nghĩa xã hội (CNXH) là giai đoạn đầu của hình thái kinh tế – xã hội cộng sản chủ nghĩa, ra đời sau khi chủ nghĩa tư bản bị thay thế. Đây chưa phải là xã hội cộng sản hoàn chỉnh mà là một giai đoạn phát triển chuyển tiếp về chất, trong đó những tàn dư của xã hội cũ vẫn còn tồn tại và những yếu tố của xã hội mới đang được hình thành.',
      image: '/images/chu nghia mac-lenin.jpg',
      detail: {
        title: 'Ở giai đoạn này:',
        content: (
          <>
            <h4>
              <b>Cơ sở vật chất – kỹ thuật của xã hội chưa đạt đến trình độ cực kỳ phát triển như trong giai đoạn cộng sản chủ nghĩa cao.
              </b>
            </h4>
            <h4>
              <b>Nguyên tắc phân phối chủ yếu là “làm theo năng lực, hưởng theo lao động”, chưa phải “hưởng theo nhu cầu”.</b>
            </h4>
            <h4>
              <b>Nhà nước vẫn tồn tại, mang bản chất của giai cấp công nhân và nhân dân lao động, nhằm tổ chức xã hội và bảo vệ thành quả cách mạng.</b>
            </h4>

          </>
        ),
        specifications: [
          { label: 'Vì vậy, CNXH vừa mang tính mới (so với chủ nghĩa tư bản), vừa mang tính chuyển tiếp, chuẩn bị các điều kiện để tiến lên giai đoạn cộng sản chủ nghĩa hoàn chỉnh.' },
        ]
      }
    },
    {
      id: 3,
      title: 'Điều kiện ra đời của chủ nghĩa xã hội',
      topic: 'Chủ nghĩa xã hội không ra đời từ ý muốn chủ quan mà là kết quả của những điều kiện khách quan và chủ quan trong sự phát triển của lịch sử xã hội.',
      description:
        'Điều kiện kinh tế – xã hội, Điều kiện giai cấp và chính trị – xã hội và Điều kiện tư tưởng – lý luận',
      image: '/images/1.jpg',
      detail: {
        title: 'Điều kiện ra đời của chủ nghĩa xã hội',
        content: (
          <>

            <h3><b>Điều kiện kinh tế – xã hội</b></h3>
              <p>Sự phát triển của lực lượng sản xuất dưới chủ nghĩa tư bản, đặc biệt là nền đại công nghiệp, tạo ra năng suất lao động cao và tính xã hội hóa ngày càng lớn của sản xuất.</p>

              <p>Mâu thuẫn cơ bản của chủ nghĩa tư bản giữa tính chất xã hội hóa của sản xuất với chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất ngày càng gay gắt.              </p>

            <h3><b>Điều kiện giai cấp và chính trị – xã hội</b></h3>
            <p>Giai cấp công nhân ra đời và phát triển cùng với nền công nghiệp hiện đại, là giai cấp đại diện cho lực lượng sản xuất tiên tiến.            </p>
            <p>Giai cấp công nhân có lợi ích căn bản đối lập với giai cấp tư sản, đồng thời có khả năng liên minh với các tầng lớp lao động khác.</p>

            <h3><b>Điều kiện tư tưởng – lý luận</b></h3>
            <p>Sự ra đời của chủ nghĩa xã hội khoa học do C. Mác và Ph. Ăngghen sáng lập, sau này được V.I. Lênin phát triển, đã biến CNXH từ những ước mơ, lý tưởng không tưởng thành một học thuyết khoa học.            </p>
          </>
        ),
      }
    },
    
    {
      id: 4,
      title: 'Những đặc trưng bản chất của chủ nghĩa xã hội',
      description: 'Chủ nghĩa xã hội có những đặc trưng bản chất phản ánh sự khác biệt căn bản so với các hình thái kinh tế – xã hội trước đó.',
      image: '/images/BAS1152 - Chủ nghĩa xã hội khoa học.jpg',
      detail: {
        title: 'Những đặc trưng bản chất của chủ nghĩa xã hội',
        content: (
          <>
            <h3><b>Về kinh tế</b></h3>

            <p>Chế độ công hữu (ở những hình thức khác nhau) giữ vai trò chủ đạo đối với các tư liệu sản xuất chủ yếu của xã hội.</p>

            <p>Nền kinh tế phát triển dựa trên lực lượng sản xuất hiện đại, khoa học – công nghệ ngày càng giữ vai trò quyết định.</p>

            <p>Sản xuất nhằm đáp ứng nhu cầu ngày càng tăng của con người, không phải tối đa hóa lợi nhuận cho một thiểu số.</p>

            <h3><b>Về chính trị</b></h3>

            <p>Quyền lực nhà nước thuộc về nhân dân lao động, dưới sự lãnh đạo của giai cấp công nhân.</p>
            <p>Nhà nước mang bản chất mới: vừa là công cụ quản lý xã hội, vừa là phương tiện tổ chức xây dựng CNXH và bảo vệ lợi ích của đa số.</p>

            <h3><b>Về xã hội</b></h3>
            <p>Thực hiện công bằng xã hội, từng bước xóa bỏ áp bức, bóc lột và bất bình đẳng mang tính giai cấp.</p>
            <p>Các giai cấp, tầng lớp xã hội có xu hướng xích lại gần nhau, sự đối kháng giai cấp dần bị thu hẹp.</p>
            <p>Con người được tạo điều kiện phát triển toàn diện cả về vật chất lẫn tinh thần.</p>

            <h3><b>Về văn hóa</b></h3>
            <p>Nền văn hóa mang tính nhân văn, tiến bộ, kế thừa các giá trị tốt đẹp của nhân loại.</p>
            <p>Con người vừa là mục tiêu, vừa là động lực của sự phát triển xã hội.</p>
          </>
        ),
      }
    }
    
  ];

  const handleNext = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    if (carouselRef.current) {
      carouselRef.current.classList.remove('prev');
      carouselRef.current.classList.add('next');
    }

    setTimeout(() => {
      if (listRef.current) {
        const firstItem = listRef.current.firstElementChild;
        if (firstItem) {
          listRef.current.appendChild(firstItem);
        }
      }
      if (carouselRef.current) {
        carouselRef.current.classList.remove('next');
      }
      setCurrentIndex((prev) => (prev + 1) % items.length);
      isTransitioningRef.current = false;
    }, 300);
  };

  const handlePrev = () => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    if (carouselRef.current) {
      carouselRef.current.classList.remove('next');
      carouselRef.current.classList.add('prev');
    }

    setTimeout(() => {
      if (listRef.current) {
        const lastItem = listRef.current.lastElementChild;
        if (lastItem) {
          listRef.current.prepend(lastItem);
        }
      }
      if (carouselRef.current) {
        carouselRef.current.classList.remove('prev');
      }
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      isTransitioningRef.current = false;
    }, 300);
  };

  const handleSeeMore = () => {
    setShowDetail(true);
    if (carouselRef.current) {
      carouselRef.current.classList.add('showDetail');
    }
  };

  const handleBack = () => {
    setShowDetail(false);
    if (carouselRef.current) {
      carouselRef.current.classList.remove('showDetail');
    }
  };

  const currentItem = items[currentIndex];

  return (
    <div className="info-page">
      {/* ORNAMENT ĐẶT NGAY DƯỚI NAVBAR */}
      <div className="historical-ornament top-ornament">
        <div className="ornament-line"></div>
        <div className="ornament-center">✦</div>
        <div className="ornament-line"></div>
      </div>
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          {items.map((item, index) => (
            <div key={item.id} className="item">
              <img src={item.image} alt={item.title} />
              <div className="introduce">
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.description}</div>
                <button className="seeMore" onClick={handleSeeMore}>
                  CHI TIẾT →
                </button>
              </div>
              <div className="detail">
                <div className="title">{item.detail.title}</div>
                <div className="des">{item.detail.content}</div>
                {item.detail.specifications && (
                  <div className="specifications">
                    {item.detail.specifications.map((spec, idx) => (
                      <div key={idx}>
                        <p>{spec.label}</p>
                        <p>{spec.value}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev" onClick={handlePrev}>&lt;</button>
          <button id="next" onClick={handleNext}>&gt;</button>
          <button id="back" onClick={handleBack} style={{ opacity: showDetail ? 1 : 0 }}>
            TỔNG QUAN →
          </button>
        </div>
      </div>
    </div>
  );
}
