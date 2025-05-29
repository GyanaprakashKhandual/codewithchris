import PlaywrightNote from "../config/PlaywrightNote";
import CypressNote from "../config/CypressBlog";
import SeleniumNote from "../config/SeleniumNote";
import RestAssuredBlog from "../config/RestAssuredBlog";

export default function Guide() {
  return(
    <div className="mt-15">
      <RestAssuredBlog/>
    <CypressNote/>
    <PlaywrightNote/>
    <SeleniumNote/>
    </div>
  )
}