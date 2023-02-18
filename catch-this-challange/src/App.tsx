import "./App.scss";
import Header from "./components/Header/Header";
import { STRINGS } from "./constants/strings";
import Form from "./components/Form/Form";
import SectionDivider from "./components/SectionDivider/SectionDivider";
import BlogImages from "./components/BlogImages/BlogImages";
import IMAGES from "./images";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Footer from "./components/Footer/Footer";
import blogs from "./data/blogData";

function App() {
  return (
    <>
      <div className="app-container">
        <Header title={STRINGS.headerTitle} />
        <Form
          formTitle={STRINGS.formTitle}
          onSubmit={() => console.log("submitted")}
        />
        <SectionDivider />
        <BlogImages blogPosts={blogs} />
        <ImageGallery imageList={IMAGES} />
      </div>
      <Footer />
    </>
  );
}

export default App;
