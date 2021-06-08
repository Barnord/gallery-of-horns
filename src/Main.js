import React from 'react';
import HornedBeast from './HornedBeast.js';


class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast header="Cow" src="https://thumbs-prod.si-cdn.com/pd4kPtn0yd2aA2Tr3if1nQxsMKA=/1072x720/filters:no_upscale()/https://public-media.si-cdn.com/filer/bc/13/bc13e43b-ff35-4de9-827d-c86bba8293b7/cow.jpg" alt="A cow staring pointedly at you." title="This is a cow" para="So cows are pretty cool, right?" />
        <HornedBeast header="Narwhal" src="https://magazine.washington.edu/columns_wordpress/wp-content/uploads/2018/06/Narwhal375.jpg" alt="A narwhal swimming majestically through the sea." title="This is a Narwhal" para="Cows are less cool than narwhals" />
      </>
    );
  }
}

export default Main;