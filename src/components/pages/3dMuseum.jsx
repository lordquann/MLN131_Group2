import { useState } from "react";
import './InfoPage.css';
import './3dMuseum.css';

export default function ThreeDMuseum() {
  return (
    <div className="3d-museum-page">
      <div className="3d-museum-content">
        <h1 className="museum-title">Triển lãm 3D</h1>
        <p className="museum-subtitle">
          Khám phá Chủ nghĩa tư bản và mặt tối, Chủ nghĩa xã hội lý tưởng mơ hồ và khoa học, Việt Nam - con đường Chủ nghĩa xã hội từ thực tiễn và những thành tựu đã đạt được
        </p>
        <div className="3d-museum-item">
          <div className="3d-museum-iframe-container">
            <iframe 
              src="https://framevr.io/mln131-g2" 
              className="3d-museum-iframe"
              title="Triển lãm 3D"
              allow="camera; microphone; fullscreen; vr; display-capture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
