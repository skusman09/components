import Button from "../components/Button";

import {
  GoBellFill,
  GoGift,
  GoInbox,
  GoMute,
  GoRepoLocked,
} from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("click");
  };

  const handleMouseOver = () => {
    console.log("MouseOver");
  };

  return (
    <div>
      <div>
        <Button primary rounded outline onClick={handleClick} className="mb-5">
          <GoBellFill />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary outline onMouseOver={handleMouseOver}>
          <GoGift />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success outline>
          <GoInbox />
          See Deal!
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoMute />
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          <GoRepoLocked />
          Somthing!
        </Button>
      </div>
    </div>
  );
}
export default ButtonPage;
