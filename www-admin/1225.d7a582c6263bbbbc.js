"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1225],{1225:(M,_,l)=>{l.r(_),l.d(_,{ProductsPageModule:()=>k});var m=l(9808),n=l(4182),c=l(2974),P=l(1e3),g=l(655),q=l(591),t=l(2096),h=l(4766),T=l(520);let f=(()=>{class i{constructor(o){this.http=o,this.BACKEND_URL=h.N.url}getAllProducts(){return this.http.get(`${this.BACKEND_URL}/products/get-all-products`)}addProduct(o,e,r,d,s,a,p){return this.http.post(`${this.BACKEND_URL}/admin/add-product`,{title:o,apiID:e,description:r,category:d,price:s,sample:a,duration:p})}editProduct(o,e,r,d,s,a,p,Z){return this.http.post(`${this.BACKEND_URL}/admin/edit-product`,{id:o,title:r,apiID:e,description:Z,category:a,price:p,sample:s,duration:d})}deleteProduct(o){return this.http.post(`${this.BACKEND_URL}/admin/delete-product`,{id:o})}}return i.\u0275fac=function(o){return new(o||i)(t.LFG(T.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function b(i,u){if(1&i){const o=t.EpF();t.TgZ(0,"form",22),t.NdJ("ngSubmit",function(){t.CHM(o);const r=t.oxw().$implicit;return t.oxw().tryEditProduct(r._id)}),t.TgZ(1,"ion-item"),t.TgZ(2,"ion-label"),t._uU(3,"Edit Product"),t.qZA(),t.qZA(),t.TgZ(4,"ion-item"),t.TgZ(5,"ion-label",23),t._uU(6,"Title "),t.TgZ(7,"ion-text",24),t._uU(8,"*"),t.qZA(),t.qZA(),t._UZ(9,"ion-input",25),t.qZA(),t.TgZ(10,"ion-item"),t.TgZ(11,"ion-label",23),t._uU(12,"API ID "),t.TgZ(13,"ion-text",24),t._uU(14,"*"),t.qZA(),t.qZA(),t._UZ(15,"ion-input",26),t.qZA(),t.TgZ(16,"ion-item"),t.TgZ(17,"ion-label",23),t._uU(18,"Category"),t.qZA(),t._UZ(19,"ion-input",27),t.qZA(),t.TgZ(20,"ion-item"),t.TgZ(21,"ion-label",23),t._uU(22,"Price"),t.qZA(),t._UZ(23,"ion-input",28),t.qZA(),t.TgZ(24,"ion-item"),t.TgZ(25,"ion-label",23),t._uU(26,"Audio Duration (in minutes)"),t.qZA(),t._UZ(27,"ion-input",29),t.qZA(),t.TgZ(28,"ion-item"),t.TgZ(29,"ion-label",23),t._uU(30,"Audio Sample"),t.qZA(),t._UZ(31,"ion-input",30),t.qZA(),t.TgZ(32,"ion-item"),t._UZ(33,"ion-textarea",31),t.qZA(),t.TgZ(34,"ion-item"),t.TgZ(35,"div",32),t.TgZ(36,"ion-button",33),t._uU(37," Edit "),t.qZA(),t.TgZ(38,"ion-button",34),t._uU(39," Delete "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(40,"ion-button",35),t.NdJ("click",function(){t.CHM(o);const r=t.oxw().$implicit;return t.oxw().closeEditProductModal(r._id)}),t._uU(41," Close "),t.qZA()}if(2&i){const o=t.oxw(2);t.Q6J("formGroup",o.editProductForm),t.xp6(36),t.Q6J("disabled",o.editProductForm.invalid)}}function U(i,u){if(1&i){const o=t.EpF();t.TgZ(0,"ion-accordion",10),t.TgZ(1,"ion-item",11),t.TgZ(2,"ion-label"),t.TgZ(3,"p",12),t.TgZ(4,"span",13),t._uU(5),t.qZA(),t._uU(6),t.qZA(),t.TgZ(7,"p",14),t._uU(8),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"ion-list",15),t.TgZ(10,"ion-item"),t.TgZ(11,"ion-button",16),t.NdJ("click",function(){const d=t.CHM(o).$implicit;return t.oxw().openEditProductModal(d._id,d.apiID,d.title,d.duration,d.sample,d.category,d.price,d.description)}),t._uU(12,"Edit"),t.qZA(),t.TgZ(13,"ion-button",17),t.NdJ("click",function(){const d=t.CHM(o).$implicit;return t.oxw().tryEditProduct(d._id)}),t._uU(14," Delete "),t.qZA(),t.TgZ(15,"ion-button",18),t.NdJ("click",function(){t.CHM(o);const r=t.oxw(),d=t.MAs(25);return r.closeProduct(d)}),t._uU(16," Close "),t.qZA(),t.qZA(),t.TgZ(17,"ion-item"),t.TgZ(18,"ion-label"),t.TgZ(19,"h2"),t._uU(20,"Rating"),t.qZA(),t.TgZ(21,"p",19),t._uU(22),t.qZA(),t.qZA(),t.TgZ(23,"ion-label"),t.TgZ(24,"h2"),t._uU(25,"Reviews"),t.qZA(),t.TgZ(26,"p",19),t._uU(27),t.qZA(),t.qZA(),t.TgZ(28,"ion-label"),t.TgZ(29,"h2"),t._uU(30,"Duration"),t.qZA(),t.TgZ(31,"p",19),t._uU(32),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"ion-item"),t.TgZ(34,"ion-label"),t._uU(35,"Description"),t.qZA(),t.qZA(),t.TgZ(36,"ion-item"),t.TgZ(37,"p",20),t._uU(38),t.qZA(),t.qZA(),t.TgZ(39,"ion-item"),t.TgZ(40,"ion-label"),t.TgZ(41,"h2"),t._uU(42,"Sample"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(43,"ion-item"),t._UZ(44,"div",21),t.qZA(),t.qZA(),t.TgZ(45,"ion-modal",9),t.YNc(46,b,42,2,"ng-template"),t.qZA(),t.qZA()}if(2&i){const o=u.$implicit;t.s9C("value",o._id),t.xp6(5),t.hij("$",o.price,""),t.xp6(1),t.hij(" ",o.title,""),t.xp6(2),t.hij("#",o.category,""),t.xp6(14),t.Oqu(o.rating),t.xp6(5),t.Oqu(o.reviews.length),t.xp6(5),t.Oqu(o.duration),t.xp6(6),t.Oqu(o.description),t.xp6(7),t.Q6J("backdropDismiss",!1)("isOpen",o.isOpen)}}function y(i,u){if(1&i){const o=t.EpF();t.TgZ(0,"form",22),t.NdJ("ngSubmit",function(){return t.CHM(o),t.oxw().tryAddProduct()}),t.TgZ(1,"ion-item"),t.TgZ(2,"h1"),t._uU(3,"Add Product"),t.qZA(),t.qZA(),t.TgZ(4,"ion-item"),t.TgZ(5,"ion-label",23),t._uU(6,"Title "),t.TgZ(7,"ion-text",24),t._uU(8,"*"),t.qZA(),t.qZA(),t._UZ(9,"ion-input",25),t.qZA(),t.TgZ(10,"ion-item"),t.TgZ(11,"ion-label",23),t._uU(12,"API ID "),t.TgZ(13,"ion-text",24),t._uU(14,"*"),t.qZA(),t.qZA(),t._UZ(15,"ion-input",26),t.qZA(),t.TgZ(16,"ion-item"),t.TgZ(17,"ion-label",23),t._uU(18,"Category"),t.qZA(),t._UZ(19,"ion-input",27),t.qZA(),t.TgZ(20,"ion-item"),t.TgZ(21,"ion-label",23),t._uU(22,"Price"),t.qZA(),t._UZ(23,"ion-input",28),t.qZA(),t.TgZ(24,"ion-item"),t.TgZ(25,"ion-label",23),t._uU(26,"Audio Duration (in minutes)"),t.qZA(),t._UZ(27,"ion-input",29),t.qZA(),t.TgZ(28,"ion-item"),t.TgZ(29,"ion-label",23),t._uU(30,"Audio Sample"),t.qZA(),t._UZ(31,"ion-input",30),t.qZA(),t.TgZ(32,"ion-item"),t._UZ(33,"ion-textarea",31),t.qZA(),t.TgZ(34,"ion-item"),t.TgZ(35,"ion-button",36),t._uU(36," Add "),t.qZA(),t.TgZ(37,"ion-button",37),t.NdJ("click",function(){return t.CHM(o),t.oxw().closeAddProductModal()}),t._uU(38," Close "),t.qZA(),t.qZA(),t.qZA()}if(2&i){const o=t.oxw();t.Q6J("formGroup",o.addProductForm),t.xp6(35),t.Q6J("disabled",o.addProductForm.invalid)}}const C=[{path:"",component:(()=>{class i{constructor(o,e,r,d){this.formBuilder=o,this.productsService=e,this.alertController=r,this.loadingController=d,this.allProducts$=new q.X([]),this.allProducts=[],this.editProductModalOpen=!1,this.addProductModal=!1}ngOnInit(){this.createFormGroups(),this.getAllProducts()}createFormGroups(){this.addProductForm=this.formBuilder.group({title:["",[n.kI.required]],apiID:["",[n.kI.required]],category:["",[n.kI.required]],price:["",[n.kI.required]],description:["",[n.kI.required]],sample:["",[n.kI.required]],duration:["",[n.kI.required]]}),this.editProductForm=this.formBuilder.group({title:["",[n.kI.required]],apiID:["",[n.kI.required]],category:["",[n.kI.required]],price:["",[n.kI.required]],description:["",[n.kI.required]],duration:["",[n.kI.required]],sample:["",[n.kI.required]]})}getAllProducts(){this.productsService.getAllProducts().subscribe(o=>{this.allProducts$.next(Object.values(o)),this.allProducts$.subscribe(e=>{e.forEach(r=>{r.isOpen=!1}),this.allProducts=e})})}openEditProductModal(o,e,r,d,s,a,p,Z){this.allProducts.filter(A=>{A._id==o&&(A.isOpen=!0)}),this.editProductForm=this.formBuilder.group({title:[r,[n.kI.required]],apiID:[e,[n.kI.required]],category:[a,[n.kI.required]],sample:[s,[n.kI.required]],duration:[d,[n.kI.required]],price:[p,[n.kI.required]],description:[Z,[n.kI.required]]}),this.editProductModalOpen=!0}closeEditProductModal(o){this.allProducts.filter(e=>{e._id==o&&(e.isOpen=!1)})}tryEditProduct(o){let e=this.editProductForm.value;this.editProductSub=this.productsService.editProduct(o,e.apiID,e.title,e.duration,e.sample,e.category,e.price,e.description).subscribe(r=>(0,g.mG)(this,void 0,void 0,function*(){console.log(r);const d=yield this.loadingController.create({cssClass:"my-custom-class",message:"Editting Product ...",duration:2e3});yield d.present(),yield this.editProductForm.reset(),yield this.closeEditProductModal(o),yield d.onDidDismiss().then(()=>this.allProducts=Object.values(r))}))}openAddProductModal(){this.addProductModal=!0}closeAddProductModal(){this.addProductModal=!1}tryAddProduct(){console.clear(),console.log(this.addProductForm.value);let o=this.addProductForm.value;this.addProductSub=this.productsService.addProduct(o.title,o.apiID,o.category,o.price,o.sample,o.description,o.duration).subscribe(e=>(0,g.mG)(this,void 0,void 0,function*(){console.log(e);const r=yield this.loadingController.create({cssClass:"my-custom-class",message:"Adding Product ...",duration:2e3});yield r.present(),yield this.addProductForm.reset(),yield this.closeAddProductModal(),yield r.onDidDismiss().then(()=>this.allProducts=Object.values(e))}))}tryDeleteProduct(o){return(0,g.mG)(this,void 0,void 0,function*(){console.log(o),yield(yield this.alertController.create({cssClass:"my-custom-class",header:"Delete this Product?",message:"Are you sure you want to Delete this Product? This cannot be undone.",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",id:"cancel-button",handler:r=>{console.log("Confirm Cancel: blah")}},{text:"Delete",id:"confirm-button",handler:()=>{this.deleteProductSub=this.productsService.deleteProduct(o).subscribe(r=>(0,g.mG)(this,void 0,void 0,function*(){const d=yield this.loadingController.create({cssClass:"my-custom-class",message:"Deleting User ...",duration:2e3});yield d.present(),yield d.onDidDismiss().then(()=>this.allProducts=r.remainingProducts)}))}}]})).present()})}closeProduct(o){console.log(o),o.value=void 0}filterByName(){}filterByPrice(){}filterByDate(){}ngOnDestroy(){console.log("Products Page destroyed")}}return i.\u0275fac=function(o){return new(o||i)(t.Y36(n.qu),t.Y36(f),t.Y36(c.Br),t.Y36(c.HT))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-products"]],hostBindings:function(o,e){1&o&&t.NdJ("unloaded",function(){return e.ngOnDestroy()})},decls:29,vars:4,consts:[["slot","end"],["id","add-product-button",3,"click"],["slot","start","name","add"],[2,"margin-right","2em"],["slot","start"],[3,"click"],["slot","start","name","arrow-up-outline"],["productAccordianGroup",""],["class","product-wrapper",3,"value",4,"ngFor","ngForOf"],[3,"backdropDismiss","isOpen"],[1,"product-wrapper",3,"value"],["slot","header"],[1,"product-title"],[1,"product-price"],[1,"product-category"],["slot","content"],[1,"edit-product-button",3,"click"],["color","danger",1,"edit-product-button",3,"click"],["color","light",1,"edit-product-button",3,"click"],[1,"product-rating"],[1,"product-description"],[1,"sample-wrapper"],[3,"formGroup","ngSubmit"],["position","floating"],["color","danger"],["required","","formControlName","title","type","text"],["required","","formControlName","apiID","placeholder","Example: CBKS452","type","text"],["required","","formControlName","category","type","text"],["required","","formControlName","price","type","text"],["required","","formControlName","duration","type","number"],["required","","formControlName","sample","type","text"],["required","","formControlName","description","placeholder","Add Description here:","rows","4"],[1,"ion-text-center"],["color","success","type","submit",1,"edit-product-modal-button",3,"disabled"],["color","danger",1,"edit-product-modal-button"],[1,"modal-close-button",3,"click"],["color","success","type","submit",1,"add-product-modal-button",3,"disabled"],[1,"add-product-modal-button",3,"click"]],template:function(o,e){1&o&&(t.TgZ(0,"ion-header"),t.TgZ(1,"ion-toolbar"),t.TgZ(2,"ion-title"),t._uU(3),t.qZA(),t.TgZ(4,"ion-buttons",0),t.TgZ(5,"ion-button",1),t.NdJ("click",function(){return e.openAddProductModal()}),t._UZ(6,"ion-icon",2),t._uU(7," Add Product "),t.qZA(),t._UZ(8,"span",3),t.qZA(),t.qZA(),t.qZA(),t.TgZ(9,"ion-content"),t.TgZ(10,"ion-toolbar"),t.TgZ(11,"ion-buttons",4),t.TgZ(12,"ion-button",5),t.NdJ("click",function(){return e.filterByName()}),t._uU(13," Name "),t._UZ(14,"ion-icon",6),t.qZA(),t.TgZ(15,"ion-button",5),t.NdJ("click",function(){return e.filterByPrice()}),t._uU(16," Price "),t._UZ(17,"ion-icon",6),t.qZA(),t.TgZ(18,"ion-button",5),t.NdJ("click",function(){return e.filterByDate()}),t._uU(19," Date "),t._UZ(20,"ion-icon",6),t.qZA(),t.TgZ(21,"ion-button",5),t.NdJ("click",function(){return e.filterByDate()}),t._uU(22," Rating "),t._UZ(23,"ion-icon",6),t.qZA(),t.qZA(),t.qZA(),t.TgZ(24,"ion-accordion-group",null,7),t.YNc(26,U,47,10,"ion-accordion",8),t.qZA(),t.qZA(),t.TgZ(27,"ion-modal",9),t.YNc(28,y,39,2,"ng-template"),t.qZA()),2&o&&(t.xp6(3),t.hij("Products ~ ",e.allProducts.length,""),t.xp6(23),t.Q6J("ngForOf",e.allProducts),t.xp6(1),t.Q6J("backdropDismiss",!1)("isOpen",e.addProductModal))},directives:[c.Gu,c.sr,c.wd,c.Sm,c.YG,c.gu,c.W2,c.eh,m.sg,c.ki,c.We,c.Ie,c.Q$,c.q_,n._Y,n.JL,n.sg,c.yW,c.pK,c.j9,n.Q7,n.JJ,n.u,c.as,c.g2],styles:["#add-product-button[_ngcontent-%COMP%]{--background: #00c400;--color: #fff}.edit-product-modal-button[_ngcontent-%COMP%], .add-product-modal-button[_ngcontent-%COMP%]{width:100px}.modal-close-button[_ngcontent-%COMP%]{--background: none;--color: #fff;padding:1em 0;height:100px}.product-wrapper[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding-bottom:15em}.product-wrapper[_ngcontent-%COMP%]   .edit-product-button[_ngcontent-%COMP%]{--background: #555;--color: #fff}.product-wrapper[_ngcontent-%COMP%]   .product-title[_ngcontent-%COMP%]{color:#fff;font-weight:600}.product-wrapper[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%]{color:#999}.product-wrapper[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]{color:#00c400}.product-wrapper[_ngcontent-%COMP%]   .product-description[_ngcontent-%COMP%]{max-width:800px}.product-wrapper[_ngcontent-%COMP%]   .sample-wrapper[_ngcontent-%COMP%]{height:100px;width:800px;background:lawngreen}"]}),i})()}];let x=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[P.Bz.forChild(C)],P.Bz]}),i})(),k=(()=>{class i{}return i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[m.ez,n.u5,n.UX,c.Pc,x]]}),i})()}}]);