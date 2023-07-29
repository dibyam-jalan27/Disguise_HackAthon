import React from "react";
// import img1 from "../asset/1.jpg";
import Rating from "../components/rating";
import Card2 from "../components/Card2";
import img1 from "../asset/1.jpg"
import img2 from "../asset/2.jpg"
import img3 from "../asset/3.jpg"
import img4 from "../asset/4.jpg"

const Location = () => {

    const data =[
        {
            id : 1 ,
            img: img1,
            title : "Long sleeve T-Shirt",
            isNew : true ,
            oldPrice : 200 ,
            price : 170
        },
        {
            id : 2 ,
            img: img2,
            title : "Long sleeve T-Shirt",
            isNew : true ,
            oldPrice : 250 ,
            price : 180 
        },
        {
            id : 3 ,
            img: img3,
            title : "Long sleeve T-Shirt",
            isNew : false ,
            oldPrice : 300 ,
            price : 183
        },
        {
            id :  4 ,
            img: img4,
            title : "Long sleeve T-Shirt",
            isNew : false ,
            oldPrice : 410 ,
            price : 350
        }
    ]

  return (
    <div >
      <img src={img1} alt="first img" className="w-full h-full opacity-80" />
      <div className="absolute top-16 right-16 w-96 h-96 rounded-[20px] bg-gray-300 opacity-60 ">
        <p className="flex justify-center items-center p-3 text-black text-[2rem]">
          Weather
        </p>
        <div className="flex justify-between p-[20px] text-[30px]">
          <div>20°c</div>
          <div>Cloudy</div>
        </div>
        <div className="flex justify-between p-[20px] text-[30px] bottom-5">
          <div>
            <div>Humidity</div>
            <div>icon</div>
          </div>
            <div>
                <div>Pressure</div>
                <div>icon</div>
            </div>
      </div>
    </div>
      <div>
      <p className="absolute top-28 left-16 text-[60px] font-medium">Jaipur</p>
        <Rating/>
      </div>
      <div className="absolute top-[500px] left-16 text-[30px] text-4xl text-center text-yellow-800 font-bold text-shadow-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed illum laborum quia, vel modi fuga vitae eum nostrum tenetur nam?
      </div>
      <div className='flex gap-10 p-5 justify-between'>
            {data.map((item) => ( 
                <Card2 item={item} key={item.id}  />
            ))}
            
        </div>
    </div>
  );
};

export default Location;
