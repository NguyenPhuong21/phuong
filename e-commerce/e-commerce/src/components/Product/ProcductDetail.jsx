import React, { useState, useEffect } from "react";
import Ratings from "../ListProduct/Ratings"
const ProcductDetail = ({data,id}) => {
//ctrl+alt+l
  // const {filter} = props;
 
  
 
  // const [data, setdatas] = useState([]);
 
  
  // useEffect(() => {
  //   fetch("http://localhost:3001/products")
  //     .then((res) => res.json())
  //     .then((datas) => {
  //       setdatas(datas);
  //     });
  // }, []);

  // const handleImage = (e) => {
  //   setdatas(e.target.value);
  // };


 
  
  // const filterDatas = () => {
  //   filter && console.log(data.filter(item=>Object.entries(filter).every(([key,value]) => {
     
  //     if(!value) return true;
  //     return item[key] === (value);
  //   })))

  //   // console.log(data.filter(item=>true))
  //   // console.log(Object.entries(filter).map(([key,value])=>key))
  // }
  // filterDatas();
// ;
//   var test =[1,2,3,4,5];
//   var result=test.filter(item=>{
//     return true;
//   })
//   // result = [4,5]
//   var test =[1,2,3,4,5];
//   var reuslt = test.every(item => {
//     return item > 3;
//   })



//   useEffect(() => {
//     const getFilterProduct = async ()=> {
//         setFilterProducts(
//            filters && datas.filter(data=>Object.entries(filters).every(([key,value])=> {
//                 if(!value) return true
//                 return data[key].includes(value);
//             }))
//     )

// }
// getFilterProduct()

// }, [products, filters])



// {
//   brand : apple,
//   rating : 3,
// }
//entries

// [
  // [brand,apple],
  //  [rating,3]
  // ]
  const [product,setProduct]=useState([])
  useEffect(() => {
    if (id) {
      data.forEach((item) => {
        if (item.category === id) {
          setProduct(item);
        }
      });
    }
  }, [id, data]);
  console.log("🚀 ~ file: ProcductDetail.jsx ~ line 78 ~ ProcductDetail ~ product", product)
  const listImg = data.map((img, index) => {

    return (
      <div key={img.id} >
          <div className="ProcductDetail_img">
            <img src={img.image} alt="Lỗi" style={{marginTop:'16px',textAlign:' center'}} />
          </div>
          <span className="ProcductDetail_title" style={{textAlign:' center', marginTop:'12px'}}>{img.name}</span>
          <div className ="ProcductDetail_ratings">
               <Ratings rate={img.rating}/>
          </div>
      </div>
    );
  });
    

const ab = (dajsdj)=>{
  const Counts = data.filter(( Count, index, arr)=>{
    return  Count.rating === dajsdj
  })
  return Counts 
}
console.log(ab(5))
  return <div id="main">
    {listImg}
    
    </div>;
};

export default ProcductDetail;
