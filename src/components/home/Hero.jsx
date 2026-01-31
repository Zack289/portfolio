import Social from "./Social";
import Data from "./Data";
import ScrollIndicator from "./ScrollIndicator";

function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen relative">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Hero image */}
        <div className="w-64 h-64 rounded-lg overflow-hidden">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="object-cover max-w-sm w-full h-full rounded-lg profile-animate"
          />
        </div>

        {/* Data / text section */}
        <div>
          <Data />
        </div>

        {/* Social icons */}
        <div>
          <Social />
        </div>
      </div>

       <div className="absolute bottom-20 hidden lg:block">
        <ScrollIndicator className="" />
      </div>
    </div>
  );
}

export default Hero;
