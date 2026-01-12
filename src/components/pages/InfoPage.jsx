import { useState, useRef, useEffect, useMemo } from 'react';
import './InfoPage.css';

export default function InfoPage() {
  const [showDetail, setShowDetail] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1); // Item id=1 ở vị trí index 1 trong mảng đã sắp xếp
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const isTransitioningRef = useRef(false);
  const isInitializedRef = useRef(false);

  const originalItems = [
    {
      id: 1,
      title: 'Chủ nghĩa xã hội',
      topic: 'Giai đoạn đầu của hình thái kinh tế – xã hội cộng sản chủ nghĩa',
      description: 'Theo quan điểm của chủ nghĩa Mác - Lênin, lịch sử xã hội loài người phát triển qua các hình thái kinh tế - xã hội. Trong đó, sự thay thế hình thái kinh tế - xã hội tư bản chủ nghĩa bằng hình thái kinh tế - xã hội cộng sản chủ nghĩa là một quá trình lịch sử - tự nhiên',
      image: '/images/chu nghia mac-lenin.jpg',
      detail: {
        title: 'Chủ nghĩa xã hội',
        content: (
          <>
            <h3><b>Hình thái kinh tế - xã hội cộng sản chủ nghĩa phát triển từ thấp lên cao qua hai giai đoạn:</b></h3>
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
      topic: 'CNXH ra đời không phải ngẫu nhiên mà là kết quả của các điều kiện khách quan và chủ quan',
      description: 'Điều kiện kinh tế, Điều kiện chính trị – xã hội',
      image: '/images/1.jpg',
      detail: {
        title: 'Điều kiện ra đời của chủ nghĩa xã hội',
        content: (
          <>
            <h3><b>Điều kiện kinh tế</b></h3>
            <p>Sự phát triển của lực lượng sản xuất trong lòng chủ nghĩa tư bản đạt đến trình độ xã hội hóa cao (nền đại công nghiệp cơ khí).</p>
            <p>Mâu thuẫn giữa tính chất xã hội hóa của lực lượng sản xuất với chế độ chiếm hữu tư nhân tư bản chủ nghĩa trở nên gay gắt, đòi hỏi phải thay thế bằng quan hệ sở hữu công cộng.</p>

            <h3><b>Điều kiện giai chính trị – xã hội</b></h3>
            <p>Sự trưởng thành của giai cấp công nhân. Mâu thuẫn kinh tế trong lòng CNTB biểu hiện về mặt xã hội là mâu thuẫn giữa giai cấp công nhân và giai cấp tư sản.</p>
            <p>Khi giai cấp công nhân nhận thức được sứ mệnh của mình, tổ chức thành chính đảng (Đảng Cộng sản) và tiến hành cách mạng giành chính quyền, CNXH sẽ ra đời.</p>

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
            <p>1. Giải phóng giai cấp, dân tộc, xã hội và con người; tạo điều kiện phát triển toàn diện.</p>
            <p>2. Nền kinh tế phát triển cao, dựa trên lực lượng sản xuất hiện đại và công hữu tư liệu sản xuất chủ yếu; phân phối chủ yếu theo lao động (giai đoạn đầu).</p>
            <p>3. Nhân dân lao động làm chủ (dân chủ XHCN).</p>
            <p>4. Nhà nước kiểu mới mang bản chất giai cấp công nhân, đại biểu cho lợi ích/quyền lực/ý chí nhân dân lao động (thời kỳ quá độ gắn với chuyên chính vô sản).</p>
            <p>5. Văn hoá phát triển cao, kế thừa và phát huy giá trị dân tộc và tinh hoa nhân loại.</p>
            <p>6. Bình đẳng, đoàn kết dân tộc, hữu nghị và hợp tác quốc tế.</p>
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

  // Sắp xếp lại items để item id=1 luôn ở vị trí thứ 2 (vị trí hiển thị mặc định)
  const items = useMemo(() => {
    if (originalItems.length < 2) return originalItems;
    
    const firstItem = originalItems.find(item => item.id === 1);
    const otherItems = originalItems.filter(item => item.id !== 1);
    
    if (!firstItem) return originalItems;
    
    // Đặt item cuối cùng ở đầu, item id=1 ở vị trí thứ 2, các item còn lại theo sau
    const lastItem = otherItems[otherItems.length - 1];
    const remainingItems = otherItems.slice(0, -1);
    
    return [lastItem, firstItem, ...remainingItems];
  }, []);

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

  const handleItemClick = (itemId) => {
    // Tìm index của item trong mảng items đã sắp xếp
    const targetIndex = items.findIndex(item => item.id === itemId);
    
    if (isTransitioningRef.current || targetIndex === -1 || targetIndex === currentIndex) {
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
    
    const targetItemId = itemId;
    
    if (!listRef.current) {
      isTransitioningRef.current = false;
      setIsSidebarOpen(false);
      return;
    }
    
    // Tìm item đích trong DOM bằng data-item-id
    const children = Array.from(listRef.current.children);
    const targetItemElement = children.find(child => 
      child.getAttribute('data-item-id') === String(targetItemId)
    );
    
    if (!targetItemElement) {
      isTransitioningRef.current = false;
      setIsSidebarOpen(false);
      return;
    }
    
    // Tìm vị trí hiện tại của item đích trong DOM
    const targetDomIndex = children.indexOf(targetItemElement);
    
    // Item hiện tại đang hiển thị luôn ở vị trí index 1 (thứ 2) trong DOM
    const currentDomIndex = 1;
    const diff = targetDomIndex - currentDomIndex;
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
      if (stepCount < steps && listRef.current) {
        if (isForward) {
          // Di chuyển forward
          const firstItem = listRef.current.firstElementChild;
          if (firstItem) {
            listRef.current.appendChild(firstItem);
          }
        } else {
          // Di chuyển backward
          const lastItem = listRef.current.lastElementChild;
          if (lastItem) {
            listRef.current.prepend(lastItem);
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

  // Đảm bảo item đầu tiên được hiển thị khi component mount
  useEffect(() => {
    // Chỉ chạy một lần khi component mount
    if (isInitializedRef.current) return;
    
    // Đợi DOM được render xong
    const timer = setTimeout(() => {
      if (listRef.current && !isInitializedRef.current) {
        const children = Array.from(listRef.current.children);
        if (children.length >= 2) {
          // Tìm item đầu tiên (id = 1) trong DOM
          const firstItemElement = children.find(child => 
            child.getAttribute('data-item-id') === '1'
          );
          
          if (firstItemElement) {
            const firstItemIndex = children.indexOf(firstItemElement);
            // Item hiển thị mặc định là item ở vị trí thứ 2 (index 1) trong DOM
            // Nếu item đầu tiên không ở vị trí thứ 2, di chuyển nó về đó
            if (firstItemIndex !== 1) {
              // Lấy item ở vị trí thứ 2 hiện tại (nếu có)
              const itemAtPosition1 = children[1];
              
              if (itemAtPosition1) {
                // Di chuyển item đầu tiên về vị trí thứ 2
                listRef.current.insertBefore(firstItemElement, itemAtPosition1);
              } else {
                // Không có item ở vị trí thứ 2, chèn item đầu tiên vào sau item đầu tiên
                const firstChild = listRef.current.firstElementChild;
                if (firstChild && firstChild !== firstItemElement) {
                  listRef.current.insertBefore(firstItemElement, firstChild.nextSibling);
                }
              }
            }
            isInitializedRef.current = true;
          }
        }
      }
    }, 150); // Đợi một chút để DOM được render xong
    
    return () => clearTimeout(timer);
  }, []); // Chỉ chạy một lần khi component mount

  // Tìm item hiện tại dựa trên currentIndex trong mảng items đã sắp xếp
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
            {originalItems.map((item, index) => {
              // Tìm index của item này trong mảng items đã sắp xếp
              const sortedIndex = items.findIndex(sortedItem => sortedItem.id === item.id);
              return (
                <li 
                  key={item.id} 
                  className={`sidebar-item ${sortedIndex === currentIndex ? 'active' : ''}`}
                  onClick={() => handleItemClick(item.id)}
                >
                  <span className="sidebar-item-number">{item.id}</span>
                  <span className="sidebar-item-text">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          {items.map((item, index) => (
            <div key={item.id} className="item" data-item-id={item.id}>
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
