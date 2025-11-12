import React from "react";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  return (
    <div className="why-wrapper">
      {/* --- First Card --- */}
      <section className="why-card">
        <div className="why-text">
          <h2 className="brand">AI SaaS Pro</h2>
          <h1>
            High-quality AI tools,
            <br /> or your <span>money back</span>
          </h1>
          <p>
            On AI SaaS Pro, you can explore, test, and purchase cutting-edge AI tools risk-free.  
            Every verified tool is backed by our <strong>money-back guarantee</strong>,  
            ensuring you build with total confidence and innovation.
          </p>
          <button className="try-btn">Try now</button>
        </div>

        <div className="why-video-wrapper">
          <div className="phone-frame">
            <video
              src="/videos/video2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="why-video"
            ></video>
          </div>
        </div>
      </section>

      {/* --- Second Card Below (Video instead of image) --- */}
      <section className="why-card second-card">
        <div className="why-video-wrapper">
          <div className="phone-frame">
            <video
              src="/videos/video3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="why-video"
            ></video>
          </div>
        </div>

        <div className="why-text">
          <h2 className="brand">AI SaaS Pro</h2>
          <h1>
            Discover the <span>Power of AI</span>
          </h1>
          <p>
            Access hundreds of AI tools to design, write, analyze, and automate —  
            everything you need to supercharge your workflow.
          </p>
          <button className="try-btn">Explore Now</button>
        </div>
      </section>
{/* --- AI Tools Showcase Cards with Videos --- */}
<section className="ai-tools-showcase">
  <div className="tool-card vibe">
    <h3>Vibe Coding</h3>
    <div className="tool-preview">
      <video
        src="/videos/video4.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  </div>

  <div className="tool-card webdev">
    <h3>Website Development</h3>
    <div className="tool-preview">
      <video
        src="/videos/video5.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  </div>

  <div className="tool-card video">
    <h3>Video Editing</h3>
    <div className="tool-preview">
      <video
        src="/videos/video6.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  </div>
</section>


{/* --- CTA Banner (Fiverr-style) --- */}
<section className="cta-section">
  <div className="cta-inner">
    <div className="cta-text">
      <h2>Freelance services at your <span>fingertips</span></h2>
      <p>Find expert help for design, development, marketing and more — start your project today.</p>
    </div>
    <div className="cta-actions">
      <button className="cta-ghost">Browse services</button>
      <button className="cta-primary">Join Now</button>
    </div>
  </div>
</section>


    </div>
  );
}
