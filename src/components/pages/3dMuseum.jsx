import { useState } from "react";
import './InfoPage.css';
import './3dMuseum.css';

export default function ThreeDMuseum() {
  return (
    <div className="3d-museum-page">
      {/* ORNAMENT ĐẶT NGAY DƯỚI NAVBAR */}
      <div className="historical-ornament top-ornament">
        <div className="ornament-line"></div>
        <div className="ornament-center">✦</div>
        <div className="ornament-line"></div>
      </div>

      <div className="3d-museum-content">
        <h1 className="museum-title">Bảo tàng 3D</h1>
        <p className="museum-subtitle">
          Khám phá lịch sử và tư tưởng chủ nghĩa xã hội khoa học qua mô hình 3D
        </p>
        
        <div className="3d-museum-item">
          <div className="3d-museum-item-image">
            <img src="/images/3d-museum-1.jpg" alt="3D Museum" onError={(e) => {
              e.target.style.display = 'none';
            }} />
            <div className="museum-placeholder">
              <p>Nội dung 3D Museum sẽ được cập nhật sớm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
