import img1 from "../personalImage/1.jpeg";
import img2 from "../personalImage/2.jpg"
import img3 from "../personalImage/3.jpg";
import img4 from "../personalImage/4.jpeg";
import img5 from "../personalImage/5.jpeg";
import img6 from "../personalImage/6.jpeg";
import img7 from "../personalImage/7.jpeg";
import img8 from "../personalImage/8.png";
import img9 from "../personalImage/9.jpg";
import img10 from "../personalImage/10.png";

const images = [
    {
        "id": 1,
        "image": img1,
    },
    {
        "id": 2,
        "image": img2,
    },
    {
        "id": 3,
        "image": img3,
    },
    {
        "id": 4,
        "image": img4,
    },
    {
        "id": 5,
        "image": img5,
    },
    {
        "id": 6,
        "image": img6,
    },
    {
        "id": 7,
        "image": img7,
    },
    {
        "id": 8,
        "image": img8,
    },
    {
        "id": 9,
        "image": img9,
    },
    {
        "id": 10,
        "image": img10,
    }
];

const Photography = () => {
      return (
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-0 gap-5 p-5">
              {images.map(img => (
                  //hover flow hidden korleu valo ekta effect pabo ....niser line ...
                  <div key={img.id} className=" rounded-xl cursor-pointer"> 
                      <img src={img.image} alt=""
                          className="rounded-xl hover:scale-150 transform transition duration-1000 hover:z-50 relative" />
                  </div>
              ))}
          </div>
      );
  };
  
export default Photography;