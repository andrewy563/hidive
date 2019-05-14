import React, { PureComponent } from "react";
import { Box, Link, Image, Button } from "rebass";
import ad from "../images/ad.png";

class Ad extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { visible: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ visible: false });
  }

  render() {
    const { visible } = this.state;

    return (
      <div>
        {visible ? (
          <Box className="ad-box" mx={20} py={15}>
            <Link href="https://google.com/">
              <Image src={ad} />
            </Link>
            <Button onClick={this.handleClick}>hello</Button>
          </Box>
        ) : null}
      </div>
    );
  }
}

export default Ad;
