// Javascript Call Example
function stdMainDetails() {
  return `Hello my name is ${this.name} and I am ${this.age} year old and I have ${this.experience} Years of experience in ${this.stream}`;
}

var stdDetails = {
  name: "Jimish Gajjar",
  age: 24,
  experience: 2,
  stream: "Full Stack Development",
};

let stdDetails_Obj = stdMainDetails.call(stdDetails);
console.log("Using Call Method");
console.log(stdDetails_Obj);
console.log("\n");





// Javascript Bind Example
const stdBasicDetails = {
  emailId: "jimish.gajjar@gmail.com",
  mobileNo: "9737956805",
  basicDetails: function () {
    return "Email ID Is " + this.emailId + " And Mobile No Id " + this.mobileNo;
  },
};

var stdBasic = {
  emailId: "test@gmail.com",
  mobileNo: "123456789",
};

let stdBasicDetails_obj = stdBasicDetails.basicDetails.bind(stdBasic);
console.log("Using Bind Method");
console.log(stdBasicDetails_obj());
console.log("\n");





// Javascript Apply Example
const stdOtherDetails = {
  collageName: "Silver Oak",
  address: "Ahmedabad",
  otherDetails: function () {
    return (
      "Collage Name Is " + this.collageName + " And Address Is " + this.address
    );
  },
};

const stdOther = {
  collageName: "Goverment Polytechnic",
  address: "Ahmedabad",
};
let stdOtherDetails_obj = stdOtherDetails.otherDetails.apply(stdOther);
console.log("Using Apply Method");
console.log(stdOtherDetails_obj);
console.log("\n");
