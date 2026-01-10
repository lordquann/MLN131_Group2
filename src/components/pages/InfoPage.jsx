import { useState, useRef, useEffect } from 'react';
import './InfoPage.css';

export default function InfoPage() {
  const [showDetail, setShowDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const isTransitioningRef = useRef(false);

  const items = [
    {
      id: 1,
      title: 'Chủ nghĩa xã hội',
      topic: 'Giai đoạn đầu của hình thái kinh tế – xã hội cộng sản chủ nghĩa',
      description: 'Theo quan điểm của chủ nghĩa Mác - Lênin, lịch sử xã hội loài người phát triển qua các hình thái kinh tế - xã hội. Trong đó, sự thay thế hình thái kinh tế - xã hội tư bản chủ nghĩa bằng hình thái kinh tế - xã hội cộng sản chủ nghĩa là một quá trình lịch sử - tự nhiên',
      image: '/images/chu nghia mac-lenin.jpg',
      detail: {
        title: 'Hình thái kinh tế - xã hội cộng sản chủ nghĩa phát triển từ thấp lên cao qua hai giai đoạn:',
        content: (
          <>
            <p>1. Giai đoạn thấp (Giai đoạn đầu): Chính là Chủ nghĩa xã hội. Đây là xã hội vừa thoát thai từ chủ nghĩa tư bản, nên về mọi phương diện (kinh tế, đạo đức, tinh thần) nó vẫn còn mang những "dấu vết" của xã hội cũ.</p>
            <p>2. Giai đoạn cao: Là Chủ nghĩa cộng sản, khi xã hội đã phát triển hoàn thiện.</p>
          </>
        ),
        specifications: [
          { label: 'Như vậy, CNXH không phải là một hình thái kinh tế - xã hội biệt lập, mà là giai đoạn đầu tất yếu phải trải qua để tiến lên chủ nghĩa cộng sản.' },
        ]
      }
    },
    {
      id: 2,
      title: 'Điều kiện ra đời của chủ nghĩa xã hội',
      topic: 'Chủ nghĩa xã hội không ra đời từ ý muốn chủ quan mà là kết quả của những điều kiện khách quan và chủ quan trong sự phát triển của lịch sử xã hội.',
      description: 'Điều kiện kinh tế – xã hội, Điều kiện giai cấp và chính trị – xã hội và Điều kiện tư tưởng – lý luận',
      image: '/images/1.jpg',
      detail: {
        title: 'Điều kiện ra đời của chủ nghĩa xã hội',
        content: (
          <>
            <h3><b>Điều kiện kinh tế – xã hội</b></h3>
            <p>Sự phát triển của lực lượng sản xuất dưới chủ nghĩa tư bản, đặc biệt là nền đại công nghiệp, tạo ra năng suất lao động cao và tính xã hội hóa ngày càng lớn của sản xuất.</p>
            <p>Mâu thuẫn cơ bản của chủ nghĩa tư bản giữa tính chất xã hội hóa của sản xuất với chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất ngày càng gay gắt.</p>

            <h3><b>Điều kiện giai cấp và chính trị – xã hội</b></h3>
            <p>Giai cấp công nhân ra đời và phát triển cùng với nền công nghiệp hiện đại, là giai cấp đại diện cho lực lượng sản xuất tiên tiến.</p>
            <p>Giai cấp công nhân có lợi ích căn bản đối lập với giai cấp tư sản, đồng thời có khả năng liên minh với các tầng lớp lao động khác.</p>

            <h3><b>Điều kiện tư tưởng – lý luận</b></h3>
            <p>Sự ra đời của chủ nghĩa xã hội khoa học do C. Mác và Ph. Ăngghen sáng lập, sau này được V.I. Lênin phát triển, đã biến CNXH từ những ước mơ, lý tưởng không tưởng thành một học thuyết khoa học.</p>
          </>
        ),
      }
    },
    {
      id: 3,
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
    },
    {
      id: 4,
      title: 'Thời kỳ quá độ lên chủ nghĩa xã hội',
      description: 'Thời kỳ quá độ lên CNXH là giai đoạn lịch sử tất yếu diễn ra giữa xã hội cũ (chủ nghĩa tư bản hoặc tiền tư bản) và xã hội xã hội chủ nghĩa. Đây là một thời kỳ lâu dài, phức tạp, có nhiều hình thức và bước đi khác nhau, tùy thuộc vào điều kiện cụ thể của từng quốc gia.',
      image: '/images/xdcnxh_65a5e607f33e7.jpg',
      detail: {
        title: 'Thời kỳ quá độ lên CNXH',
        content: (
          <>
            <h4><b>1. Tính tất yếu của thời kỳ quá độ</b></h4>
            <p>Không thể chuyển ngay từ xã hội cũ sang CNXH hoàn chỉnh vì lực lượng sản xuất, quan hệ sản xuất, trình độ văn hóa – xã hội chưa tương thích.</p>
            <p>Cần có thời gian để:
              <br />• Cải biến quan hệ sản xuất cũ.
              <br />• Xây dựng cơ sở vật chất – kỹ thuật của CNXH.
              <br />• Hình thành con người mới và các giá trị xã hội mới.
            </p>

            <h4><b>2. Đặc điểm cơ bản của thời kỳ quá độ</b></h4>
            <p>Tồn tại đan xen nhiều hình thức kinh tế – xã hội: công hữu, tập thể, tư nhân, các thành phần kinh tế khác nhau.</p>
            <p>Đấu tranh giữa cái cũ và cái mới diễn ra trên tất cả các lĩnh vực: kinh tế, chính trị, tư tưởng, văn hóa.</p>
            <p>Nhà nước giữ vai trò quan trọng trong việc định hướng phát triển, quản lý xã hội và điều tiết các mối quan hệ lợi ích.</p>

            <h4><b>3. Nội dung chủ yếu của thời kỳ quá độ</b></h4>
            <p>Phát triển lực lượng sản xuất, đẩy mạnh công nghiệp hóa, hiện đại hóa.</p>
            <p>Từng bước xây dựng và hoàn thiện quan hệ sản xuất xã hội chủ nghĩa.</p>
            <p>Xây dựng nhà nước của nhân dân lao động, mở rộng dân chủ.</p>
            <p>Phát triển giáo dục, khoa học, văn hóa; nâng cao đời sống vật chất và tinh thần của nhân dân.</p>

            <h4><b>4. Ý nghĩa của thời kỳ quá độ</b></h4>
            <p>Thời kỳ quá độ quyết định khả năng hiện thực hóa các mục tiêu của chủ nghĩa xã hội. Thành công hay hạn chế trong giai đoạn này ảnh hưởng trực tiếp đến con đường phát triển lâu dài của mỗi quốc gia lựa chọn con đường xã hội chủ nghĩa.</p>
          </>
        ),
        specifications: [
          { label: 'Kết luận', value: 'Chủ nghĩa xã hội là một giai đoạn phát triển lịch sử có cơ sở khoa học và thực tiễn, còn thời kỳ quá độ lên CNXH là quá trình tất yếu, phức tạp và lâu dài nhằm chuẩn bị đầy đủ các điều kiện để xây dựng một xã hội công bằng, tiến bộ và phát triển bền vững.' },
        ]
      }
    },
    {
      id: 5,
      title: 'Quá độ lên Chủ nghĩa xã hội ở Việt Nam',
      description: 'Việt Nam lựa chọn con đường quá độ gián tiếp, tức là bỏ qua chế độ tư bản chủ nghĩa để xây dựng chủ nghĩa xã hội với những đặc trưng và phương hướng phát triển phù hợp với điều kiện cụ thể của đất nước.',
      image: '/images/lyluanchinhtri.vn-home-media-k2-items-cache-_e91f5df61683ad642f80f8746e777635_l.jpg',
      detail: {
        title: 'Quá độ lên CNXH ở Việt Nam',
        content: (
          <>
            <h4><b>1. Quá độ lên CNXH bỏ qua chế độ TBCN</b></h4>
            <p>Việt Nam lựa chọn con đường quá độ gián tiếp, tức là bỏ qua chế độ tư bản chủ nghĩa. Quan điểm này được Đại hội IX của Đảng Cộng sản Việt Nam xác định rõ:</p>
            <p>
              <b>• Bản chất của "Bỏ qua":</b> Là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa.
            </p>
            <p>
              <b>• Không bỏ qua tất cả:</b> Phải tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa, đặc biệt là về khoa học và công nghệ, để phát triển nhanh lực lượng sản xuất, xây dựng nền kinh tế hiện đại.
            </p>
            <p>
              <b>• Hình thức:</b> Đây là sự nghiệp khó khăn, phức tạp, lâu dài, đòi hỏi phải trải qua nhiều chặng đường với nhiều hình thức tổ chức kinh tế, xã hội đan xen.
            </p>

            <h4><b>2. Những đặc trưng của CNXH và phương hướng xây dựng CNXH ở Việt Nam hiện nay</b></h4>
            <p>Đảng Cộng sản Việt Nam đã tổng kết thực tiễn và xác định mô hình CNXH mà Việt Nam xây dựng trong Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (Bổ sung, phát triển năm 2011).</p>

            <h4><b>a. 8 Đặc trưng cơ bản của xã hội XHCN ở Việt Nam:</b></h4>
            <p>
              1. Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.
              <br />2. Do nhân dân làm chủ.
              <br />3. Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ phù hợp.
              <br />4. Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.
              <br />5. Con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện.
              <br />6. Các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển.
              <br />7. Có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo.
              <br />8. Có quan hệ hữu nghị và hợp tác với các nước trên thế giới.
            </p>

            <h4><b>b. 8 Phương hướng xây dựng CNXH:</b></h4>
            <p>
              1. Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với phát triển kinh tế tri thức, bảo vệ tài nguyên, môi trường.
              <br />2. Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa.
              <br />3. Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc; xây dựng con người...
              <br />4. Bảo đảm vững chắc quốc phòng và an ninh quốc gia, trật tự, an toàn xã hội.
              <br />5. Thực hiện đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển.
              <br />6. Xây dựng nền dân chủ xã hội chủ nghĩa, thực hiện đại đoàn kết toàn dân tộc.
              <br />7. Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân.
              <br />8. Xây dựng Đảng trong sạch, vững mạnh.
            </p>
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

  const handleItemClick = (targetIndex) => {
    if (isTransitioningRef.current || targetIndex === currentIndex) {
      setIsSidebarOpen(false);
      return;
    }
    
    // Đóng detail view nếu đang mở
    if (showDetail) {
      setShowDetail(false);
      if (carouselRef.current) {
        carouselRef.current.classList.remove('showDetail');
      }
    }
    
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    
    const diff = targetIndex - currentIndex;
    const absDiff = Math.abs(diff);
    // Xác định hướng di chuyển (chọn đường ngắn nhất)
    const isForward = (diff > 0 && absDiff <= items.length / 2) || 
                      (diff < 0 && absDiff > items.length / 2);
    
    // Tính số bước cần di chuyển
    let steps;
    if (isForward) {
      steps = diff > 0 ? diff : (items.length + diff);
    } else {
      steps = diff < 0 ? absDiff : (items.length - absDiff);
    }
    
    // Bắt đầu animation
    if (carouselRef.current) {
      if (isForward) {
        carouselRef.current.classList.remove('prev');
        carouselRef.current.classList.add('next');
      } else {
        carouselRef.current.classList.remove('next');
        carouselRef.current.classList.add('prev');
      }
    }
    
    // Thực hiện di chuyển từng bước
    let stepCount = 0;
    const performStep = () => {
      if (stepCount < steps) {
        if (isForward) {
          // Di chuyển forward
          if (listRef.current) {
            const firstItem = listRef.current.firstElementChild;
            if (firstItem) {
              listRef.current.appendChild(firstItem);
            }
          }
        } else {
          // Di chuyển backward
          if (listRef.current) {
            const lastItem = listRef.current.lastElementChild;
            if (lastItem) {
              listRef.current.prepend(lastItem);
            }
          }
        }
        
        stepCount++;
        
        if (stepCount < steps) {
          // Tiếp tục bước tiếp theo
          setTimeout(performStep, 100);
        } else {
          // Hoàn thành, cập nhật index và reset
          setTimeout(() => {
            setCurrentIndex(targetIndex);
            if (carouselRef.current) {
              carouselRef.current.classList.remove('next', 'prev');
            }
            isTransitioningRef.current = false;
          }, 300);
        }
      }
    };
    
    // Bắt đầu di chuyển
    setTimeout(performStep, 50);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const currentItem = items[currentIndex];

  return (
    <div className={`info-page ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* ORNAMENT ĐẶT NGAY DƯỚI NAVBAR */}
      <div className="historical-ornament top-ornament">
        <div className="ornament-line"></div>
        <div className="ornament-center">✦</div>
        <div className="ornament-line"></div>
      </div>
      
      {/* Sidebar Toggle Button - Luôn hiển thị */}
      <div className="sidebar-toggle-wrapper">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? '✕' : '☰'}
        </button>
        <span className="sidebar-toggle-label">Mục lục</span>
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar-menu ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <h3 className="sidebar-title">Danh sách nội dung</h3>
          <ul className="sidebar-list">
            {items.map((item, index) => (
              <li 
                key={item.id} 
                className={`sidebar-item ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleItemClick(index)}
              >
                <span className="sidebar-item-number">{item.id}</span>
                <span className="sidebar-item-text">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>
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
