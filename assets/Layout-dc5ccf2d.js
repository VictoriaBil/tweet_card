import{s as t,L as i,j as e,O as o}from"./index-76d73954.js";const d={desktop:"@media screen and (min-width: 1200px)",tablet:"@media screen and (min-width: 768px)",mobile:"@media screen and (max-width: 767px)"},r=t.nav`
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;

  ${d.mobile} {
    gap: 40px;
  }
`,n=t(i)`
  width: 85px;
  text-align: center;
  padding: 10px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: #00c2ad;
  border: 2px solid #00c2ad;
  background-color: white;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    color: #3e2d85;
    border: 2px solid #3e2d85;
  }

  ${d.mobile} {
    width: 55px;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
  }
`,s=()=>e.jsxs(r,{children:[e.jsx(n,{to:"/",children:"Home"}),e.jsx(n,{to:"/tweets",children:"Tweets"})]}),a=t.div`
  padding-top: 20px;
`,x=t.header``,c=()=>e.jsx(a,{children:e.jsx(x,{children:e.jsx(s,{})})}),l=()=>e.jsxs("div",{children:[e.jsx("header",{children:e.jsx(c,{})}),e.jsx("main",{children:e.jsx(o,{})})]});export{l as default};
