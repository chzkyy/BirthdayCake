function _0x3347(){const _0x5bf7a8=['Scene','maxDistance','./assets/fonts/helvetiker_bold.typeface.json','#4d2600','./assets/skyboxes/Vasa/px.jpg','Euler','position','shadowMap','8612040YXXIQL','./assets/skyboxes/Vasa/nz.jpg','render','Mesh','731454oDKOGE','AmbientLight','resize','SpotLight','push','MeshStandardMaterial','20011629kqGTGJ','./assets/skyboxes/Vasa/py.jpg','15504564rjsGws','enabled','CylinderGeometry','10uVZjyd','innerHeight','WebGLRenderer','./assets/textures/wood_texture.jpg','intensity','./assets/textures/candle_texture.jpg','keydown','addEventListener','189WwUmrb','basicShadowMap','domElement','keyCode','196572kRaRYJ','castShadow','PointLight','BackSide','./assets/skyboxes/Vasa/nx.jpg','add','aspect','./assets/skyboxes/Vasa/ny.jpg','updateProjectionMatrix','./assets/textures/wood_normal.png','load','MeshPhongMaterial','#E8DC8B','4uCfxmv','./assets/skyboxes/Vasa/pz.jpg','minDistance','9685912DBlDjU','receiveShadow','appendChild','9OyvhFT','Happy\x20Birthday','setSize','ConeGeometry','./assets/textures/frosting_texture.jpg','22461qbIjqJ','200TaaFYE','scene','PerspectiveCamera','setClearColor','computeBoundingBox','./assets/textures/frosting_normal.png','target','innerWidth','#d65645','#e65c2c','lookAt','set'];_0x3347=function(){return _0x5bf7a8;};return _0x3347();}(function(_0x44a22c,_0x53d55e){const _0x4f6657=_0x3467,_0x271803=_0x44a22c();while(!![]){try{const _0x203781=-parseInt(_0x4f6657(0x100))/0x1*(-parseInt(_0x4f6657(0xdc))/0x2)+-parseInt(_0x4f6657(0xe7))/0x3*(-parseInt(_0x4f6657(0xe8))/0x4)+-parseInt(_0x4f6657(0xfc))/0x5+-parseInt(_0x4f6657(0x117))/0x6*(parseInt(_0x4f6657(0x113))/0x7)+-parseInt(_0x4f6657(0xdf))/0x8*(-parseInt(_0x4f6657(0xe2))/0x9)+parseInt(_0x4f6657(0x10b))/0xa*(parseInt(_0x4f6657(0x106))/0xb)+-parseInt(_0x4f6657(0x108))/0xc;if(_0x203781===_0x53d55e)break;else _0x271803['push'](_0x271803['shift']());}catch(_0x449dfc){_0x271803['push'](_0x271803['shift']());}}}(_0x3347,0xec60f));function _0x3467(_0x3a8b94,_0x4cb565){const _0x334719=_0x3347();return _0x3467=function(_0x34676e,_0x5ddb60){_0x34676e=_0x34676e-0xd3;let _0x4da3e8=_0x334719[_0x34676e];return _0x4da3e8;},_0x3467(_0x3a8b94,_0x4cb565);}import*as _0x432539 from'./three.js-master/build/three.module.js';import{OrbitControls}from'./three.js-master/examples/jsm/controls/OrbitControls.js';import{GLTFLoader}from'./three.js-master/examples/jsm/loaders/GLTFLoader.js';import{TextGeometry}from'./three.js-master/examples/jsm/geometries/TextGeometry.js';import{FontLoader}from'./three.js-master/examples/jsm/loaders/FontLoader.js';const initialize=()=>{const _0x1f0fb4=_0x3467,_0xb7df44=new _0x432539[(_0x1f0fb4(0xf4))](),_0x57c268=createCamera(),_0x224b0e=createRenderer(),_0x1b887d=new _0x432539['TextureLoader']();handleResize(_0x224b0e,_0x57c268);const _0x3f722e=new OrbitControls(_0x57c268,_0x224b0e[_0x1f0fb4(0x115)]);_0x3f722e[_0x1f0fb4(0x109)]=!![],_0x3f722e[_0x1f0fb4(0xde)]=-0x64,_0x3f722e[_0x1f0fb4(0xf5)]=0x320,_0x3f722e['enableDamping']=!![],_0x3f722e[_0x1f0fb4(0xee)][_0x1f0fb4(0xf3)](0x0,0x0,0x0);const _0x3715c3=createAmbientLight(_0xb7df44),_0x5086de=createSpotLight(_0xb7df44),_0x4aa9c6=createtopPart(_0xb7df44,_0x1b887d),_0x3b193a=createlegPart(_0xb7df44,_0x1b887d),_0xfe36a6=createbottomPart(_0xb7df44,_0x1b887d),_0x57abcc=createPlate(_0xb7df44),_0x275475=createtopCake(_0xb7df44,_0x1b887d),_0x89951d=createbottomCake(_0xb7df44,_0x1b887d),_0xf0bd37=createtopCandle(_0xb7df44,_0x1b887d),_0x26241b=createbodyCandle(_0xb7df44,_0x1b887d),_0x2c72d6=createCandleLight(_0xb7df44),_0x540672=createtopCandle2(_0xb7df44,_0x1b887d),_0x1cb7cd=createbodyCandle2(_0xb7df44,_0x1b887d),_0x149727=createCandleLight2(_0xb7df44),_0x21d725=createText(_0xb7df44),_0xe9161c=new GLTFLoader(),_0x144408=createCamera3D(_0xb7df44,_0xe9161c),_0x2b7896=createSkybox(_0xb7df44,_0x1b887d);_0x57c268[_0x1f0fb4(0xfa)][_0x1f0fb4(0xf3)](0x10,0xc,-0x8),_0x4aa9c6[_0x1f0fb4(0xfa)][_0x1f0fb4(0xf3)](0x0,0x0,0x0),_0x3b193a[_0x1f0fb4(0xfa)][_0x1f0fb4(0xf3)](0x0,-0x8,0.5),_0xfe36a6[_0x1f0fb4(0xfa)]['set'](0x0,-0x10,0.5);const _0x252c30=()=>{const _0x5d87f6=_0x1f0fb4;_0x3f722e['update'](),requestAnimationFrame(_0x252c30),_0x224b0e[_0x5d87f6(0xfe)](_0xb7df44,_0x57c268);},_0x11b987=_0x5db136=>{const _0x78e279=_0x1f0fb4,_0x51d832=_0x5db136[_0x78e279(0x116)];switch(_0x51d832){case 0x51:_0x5086de[_0x78e279(0x10f)]===0x0?_0x5086de[_0x78e279(0x10f)]=0x1:_0x5086de['intensity']=0x0;break;case 0x57:const _0x53b063=_0x57c268[_0x78e279(0xfa)]['set'](0x10,0xc,-0x8),_0x150a13=_0x57c268['position'][_0x78e279(0xf3)](0x18,0x6,0x0);_0x53b063?_0x150a13:_0x57c268[_0x78e279(0xfa)][_0x78e279(0xf3)](0x10,0xc,-0x8);break;case 0x53:_0x2c72d6[_0x78e279(0x10f)]===0x0&&_0x149727[_0x78e279(0x10f)]===0x0?(_0x2c72d6['intensity']=0x1,_0x149727[_0x78e279(0x10f)]=0x1):(_0x2c72d6[_0x78e279(0x10f)]=0x0,_0x149727['intensity']=0x0);break;case 0x20:_0x57c268['position'][_0x78e279(0xf3)](0x10,0xc,-0x8);break;default:break;}},_0x237794=_0x5b8a09=>{const _0x4fe27e=_0x1f0fb4;document[_0x4fe27e(0x112)](_0x4fe27e(0x111),_0x11b987);};_0x237794(),_0x252c30();},handleResize=(_0x396a01,_0x597d73)=>{const _0x23339d=_0x3467;window[_0x23339d(0x112)](_0x23339d(0x102),()=>{const _0x349b23=_0x23339d;_0x396a01[_0x349b23(0xe4)](window[_0x349b23(0xef)],window[_0x349b23(0x10c)]),_0x597d73[_0x349b23(0xd5)]=window[_0x349b23(0xef)]/window['innerHeight'],_0x597d73[_0x349b23(0xd7)]();});},createCamera=()=>{const _0x366a32=_0x3467,[_0x54fef,_0x5f4320]=[0x4b,window[_0x366a32(0xef)]/window['innerHeight']],_0x5af528=new _0x432539[(_0x366a32(0xea))](_0x54fef,_0x5f4320);return _0x5af528[_0x366a32(0xf2)](0x0,0x0,0x0),_0x5af528;},createRenderer=()=>{const _0x5244a2=_0x3467,_0x53a83f=new _0x432539[(_0x5244a2(0x10d))]({'antialias':!![]});return _0x53a83f[_0x5244a2(0xeb)](_0x5244a2(0xf7)),_0x53a83f[_0x5244a2(0xe4)](window[_0x5244a2(0xef)],window['innerHeight']),document['body'][_0x5244a2(0xe1)](_0x53a83f['domElement']),_0x53a83f[_0x5244a2(0xfb)][_0x5244a2(0x109)]=!![],_0x53a83f[_0x5244a2(0x114)]=!![],_0x53a83f;},createSpotLight=_0x2be366=>{const _0x434e7a=_0x3467,_0xdd875=new _0x432539[(_0x434e7a(0x103))](_0x434e7a(0xdb),0x0,0x3e8,Math['PI']/0x8);return _0xdd875[_0x434e7a(0xfa)][_0x434e7a(0xf3)](0x14,0x1e,0x0),_0x2be366[_0x434e7a(0xd4)](_0xdd875),_0xdd875;},createAmbientLight=_0xc85026=>{const _0x20c747=_0x3467,_0x207686=new _0x432539[(_0x20c747(0x101))]('#E8DC8B',0.3);return _0xc85026[_0x20c747(0xd4)](_0x207686),_0x207686;},createtopPart=(_0xb74f14,_0x3281f4)=>{const _0x47353d=_0x3467,_0x5aa5be=new _0x432539[(_0x47353d(0x10a))](0xc,0xc,1.2,0x8),_0x2d7561=_0x3281f4[_0x47353d(0xd9)]('./assets/textures/wood_texture.jpg'),_0x31203e=_0x3281f4[_0x47353d(0xd9)]('./assets/textures/wood_normal.png'),_0x33831a=new _0x432539[(_0x47353d(0xda))]({'normalMap':_0x31203e,'map':_0x2d7561}),_0x276eba=new _0x432539[(_0x47353d(0xff))](_0x5aa5be,_0x33831a);return _0x276eba['receiveShadow']=!![],_0x276eba[_0x47353d(0x118)]=!![],_0xb74f14['add'](_0x276eba),_0x276eba;},createlegPart=(_0x28620b,_0x3bb52f)=>{const _0x3c9f60=_0x3467,_0x171016=new _0x432539[(_0x3c9f60(0x10a))](0x1,0x1,0x10,0x40),_0x4a140a=_0x3bb52f[_0x3c9f60(0xd9)](_0x3c9f60(0x10e)),_0x46a734=_0x3bb52f[_0x3c9f60(0xd9)](_0x3c9f60(0xd8)),_0xb3474a=new _0x432539[(_0x3c9f60(0xda))]({'normalMap':_0x46a734,'map':_0x4a140a}),_0x4d3bad=new _0x432539[(_0x3c9f60(0xff))](_0x171016,_0xb3474a);return _0x4d3bad[_0x3c9f60(0xe0)]=!![],_0x4d3bad[_0x3c9f60(0x118)]=!![],_0x28620b[_0x3c9f60(0xd4)](_0x4d3bad),_0x4d3bad;},createbottomPart=(_0x2c038b,_0x57d516)=>{const _0xa2e17c=_0x3467,_0x3af29c=new _0x432539[(_0xa2e17c(0x10a))](0x5,0x5,0x1,0x8),_0x275456=_0x57d516[_0xa2e17c(0xd9)](_0xa2e17c(0x10e)),_0x537128=_0x57d516['load'](_0xa2e17c(0xd8)),_0x3a81a6=new _0x432539[(_0xa2e17c(0xda))]({'normalMap':_0x537128,'map':_0x275456}),_0x2e3568=new _0x432539[(_0xa2e17c(0xff))](_0x3af29c,_0x3a81a6);return _0x2e3568['receiveShadow']=!![],_0x2e3568[_0xa2e17c(0x118)]=!![],_0x2c038b[_0xa2e17c(0xd4)](_0x2e3568),_0x2e3568;},createPlate=_0x38d0f7=>{const _0x591b58=_0x3467,_0x597d1b=new _0x432539['CylinderGeometry'](0x7,0x7,0.5,0x40),_0x1ee74e=new _0x432539[(_0x591b58(0xda))]({'Shininess':0x40,'Reflectifity':0.5}),_0x1db564=new _0x432539[(_0x591b58(0xff))](_0x597d1b,_0x1ee74e);return _0x1db564[_0x591b58(0xfa)]['set'](0x0,0.8,0.6),_0x1db564[_0x591b58(0xe0)]=!![],_0x1db564['castShadow']=!![],_0x38d0f7[_0x591b58(0xd4)](_0x1db564),_0x1db564;},createbottomCake=(_0x297720,_0x262bf7)=>{const _0xfbf9ac=_0x3467,_0x100a38=new _0x432539[(_0xfbf9ac(0x10a))](0x5,0x5,0x4,0x40),_0xf74840=_0x262bf7[_0xfbf9ac(0xd9)](_0xfbf9ac(0xe6)),_0x414394=_0x262bf7[_0xfbf9ac(0xd9)](_0xfbf9ac(0xed)),_0x472436=new _0x432539[(_0xfbf9ac(0xda))]({'map':_0xf74840,'normalMap':_0x414394}),_0x43ddc2=new _0x432539['Mesh'](_0x100a38,_0x472436);return _0x43ddc2[_0xfbf9ac(0xfa)][_0xfbf9ac(0xf3)](0x0,0x3,0.5),_0x43ddc2[_0xfbf9ac(0xe0)]=!![],_0x43ddc2[_0xfbf9ac(0x118)]=!![],_0x297720[_0xfbf9ac(0xd4)](_0x43ddc2),_0x43ddc2;},createtopCake=(_0x421b2c,_0x44d0b7)=>{const _0xfb216c=_0x3467,_0x2f4e44=new _0x432539[(_0xfb216c(0x10a))](0x3,0x3,0x4,0x40),_0x3dc9b0=_0x44d0b7['load'](_0xfb216c(0xe6)),_0x516624=_0x44d0b7[_0xfb216c(0xd9)]('./assets/textures/frosting_normal.png'),_0xe31f=new _0x432539['MeshPhongMaterial']({'map':_0x3dc9b0,'normalMap':_0x516624}),_0x2bce9f=new _0x432539['Mesh'](_0x2f4e44,_0xe31f);return _0x2bce9f[_0xfb216c(0xfa)]['set'](0x0,0x7,0.5),_0x2bce9f['receiveShadow']=!![],_0x2bce9f[_0xfb216c(0x118)]=!![],_0x421b2c[_0xfb216c(0xd4)](_0x2bce9f),_0x2bce9f;},createtopCandle=(_0x13a571,_0x2217af)=>{const _0x59ddec=_0x3467,_0x20f68f=new _0x432539[(_0x59ddec(0xe5))](0.05,0.1,0x40),_0x4a2994=_0x2217af[_0x59ddec(0xd9)]('./assets/textures/candle_texture.jpg'),_0x988f6b=new _0x432539[(_0x59ddec(0xda))]({'map':_0x4a2994}),_0x5614d6=new _0x432539[(_0x59ddec(0xff))](_0x20f68f,_0x988f6b);return _0x5614d6[_0x59ddec(0xfa)]['set'](0x0,9.5,0.6),_0x5614d6[_0x59ddec(0xe0)]=!![],_0x5614d6[_0x59ddec(0x118)]=!![],_0x13a571['add'](_0x5614d6),_0x5614d6;},createbodyCandle=(_0x260933,_0x40bd86)=>{const _0x33f393=_0x3467,_0x31f6b0=new _0x432539['CylinderGeometry'](0.05,0.05,0.5,0x40),_0x273c50=_0x40bd86[_0x33f393(0xd9)](_0x33f393(0x110)),_0x6244a5=new _0x432539['MeshPhongMaterial']({'map':_0x273c50}),_0x1a2443=new _0x432539[(_0x33f393(0xff))](_0x31f6b0,_0x6244a5);return _0x1a2443[_0x33f393(0xfa)][_0x33f393(0xf3)](0x0,9.2,0.6),_0x1a2443[_0x33f393(0xe0)]=!![],_0x1a2443[_0x33f393(0x118)]=!![],_0x260933['add'](_0x1a2443),_0x1a2443;},createCandleLight=_0x570bc=>{const _0x9a4cf6=_0x3467,_0x7428d7=new _0x432539[(_0x9a4cf6(0x119))](_0x9a4cf6(0xf1),0x0,0x8);return _0x7428d7['position'][_0x9a4cf6(0xf3)](0x0,9.6,0.6),_0x570bc[_0x9a4cf6(0xd4)](_0x7428d7),_0x7428d7;},createtopCandle2=(_0x4740dd,_0x190512)=>{const _0x5aa683=_0x3467,_0xf6ffd0=new _0x432539[(_0x5aa683(0xe5))](0.05,0.1,0x40),_0x8e8489=_0x190512[_0x5aa683(0xd9)](_0x5aa683(0x110)),_0x5231d8=new _0x432539[(_0x5aa683(0xda))]({'map':_0x8e8489}),_0x25b4e6=new _0x432539[(_0x5aa683(0xff))](_0xf6ffd0,_0x5231d8);return _0x25b4e6[_0x5aa683(0xfa)]['set'](0.3,9.5,0.6),_0x25b4e6[_0x5aa683(0xe0)]=!![],_0x25b4e6[_0x5aa683(0x118)]=!![],_0x4740dd['add'](_0x25b4e6),_0x25b4e6;},createbodyCandle2=(_0x477c26,_0xd021d6)=>{const _0x162ac2=_0x3467,_0xe26e71=new _0x432539[(_0x162ac2(0x10a))](0.05,0.05,0.5,0x40),_0x2b319e=_0xd021d6[_0x162ac2(0xd9)](_0x162ac2(0x110)),_0x11edd5=new _0x432539[(_0x162ac2(0xda))]({'map':_0x2b319e}),_0x163767=new _0x432539['Mesh'](_0xe26e71,_0x11edd5);return _0x163767[_0x162ac2(0xfa)][_0x162ac2(0xf3)](0.3,9.2,0.6),_0x163767[_0x162ac2(0xe0)]=!![],_0x163767[_0x162ac2(0x118)]=!![],_0x477c26[_0x162ac2(0xd4)](_0x163767),_0x163767;},createCandleLight2=_0x1afe57=>{const _0xbfa083=_0x3467,_0x2828c2=new _0x432539[(_0xbfa083(0x119))](_0xbfa083(0xf1),0x0,0x8);return _0x2828c2[_0xbfa083(0xfa)][_0xbfa083(0xf3)](0.3,9.6,0.6),_0x1afe57['add'](_0x2828c2),_0x2828c2;},createText=_0x8b4e41=>{const _0x35ebfa=_0x3467,_0x461cfd=new FontLoader();_0x461cfd[_0x35ebfa(0xd9)](_0x35ebfa(0xf6),function(_0x361c76){const _0x27ebf6=_0x35ebfa,_0x1b4e3b=new TextGeometry(_0x27ebf6(0xe3),{'font':_0x361c76,'size':0.4,'height':0.08}),_0x1c1922=new _0x432539[(_0x27ebf6(0x105))]({'color':_0x27ebf6(0xf0)});_0x1b4e3b[_0x27ebf6(0xec)]();const _0x40401a=new _0x432539[(_0x27ebf6(0xff))](_0x1b4e3b,_0x1c1922);_0x40401a['position'][_0x27ebf6(0xf3)](-0.5,9.1,2.4);const _0x1764f4=new _0x432539[(_0x27ebf6(0xf9))](-Math['PI']/0x8,Math['PI']/0x2,0.4);return _0x40401a['rotation'][_0x27ebf6(0xf3)](_0x1764f4['x'],_0x1764f4['y'],_0x1764f4['z']),_0x40401a[_0x27ebf6(0xe0)]=!![],_0x40401a[_0x27ebf6(0x118)]=!![],_0x8b4e41[_0x27ebf6(0xd4)](_0x40401a),_0x40401a;});},createCamera3D=(_0x2565e6,_0x42cb32)=>{const _0xc9321f=_0x3467;_0x42cb32[_0xc9321f(0xd9)]('./assets/3dmodel/model.gltf',_0x18b99e=>{const _0x3ead69=_0xc9321f,_0x1f5b9=_0x18b99e[_0x3ead69(0xe9)];return _0x1f5b9[_0x3ead69(0xfa)][_0x3ead69(0xf3)](0x14,-0x2,0x0),_0x1f5b9['rotation'][_0x3ead69(0xf3)](0x0,-Math['PI']/0x2,0x0),_0x2565e6[_0x3ead69(0xd4)](_0x1f5b9),_0x1f5b9;});},createSkybox=(_0x5367a6,_0x52e3c0)=>{const _0x2571b3=_0x3467,_0xba7ed=[],_0x4a8444=_0x52e3c0[_0x2571b3(0xd9)](_0x2571b3(0xf8)),_0x5c93f4=_0x52e3c0[_0x2571b3(0xd9)](_0x2571b3(0xd3)),_0x107a1d=_0x52e3c0[_0x2571b3(0xd9)](_0x2571b3(0x107)),_0xa65617=_0x52e3c0[_0x2571b3(0xd9)](_0x2571b3(0xd6)),_0x760d49=_0x52e3c0[_0x2571b3(0xd9)](_0x2571b3(0xdd)),_0x49dc70=_0x52e3c0[_0x2571b3(0xd9)](_0x2571b3(0xfd));_0xba7ed[_0x2571b3(0x104)](new _0x432539[(_0x2571b3(0xda))]({'map':_0x4a8444})),_0xba7ed[_0x2571b3(0x104)](new _0x432539[(_0x2571b3(0xda))]({'map':_0x5c93f4})),_0xba7ed[_0x2571b3(0x104)](new _0x432539[(_0x2571b3(0xda))]({'map':_0x107a1d})),_0xba7ed[_0x2571b3(0x104)](new _0x432539['MeshPhongMaterial']({'map':_0xa65617})),_0xba7ed[_0x2571b3(0x104)](new _0x432539['MeshPhongMaterial']({'map':_0x760d49})),_0xba7ed['push'](new _0x432539['MeshPhongMaterial']({'map':_0x49dc70}));for(var _0x26328c=0x0;_0x26328c<0x6;_0x26328c++)_0xba7ed[_0x26328c]['side']=_0x432539[_0x2571b3(0x11a)];const _0x793d4=new _0x432539['BoxGeometry'](0x1f4,0x1f4,0x1f4),_0x5ccd98=new _0x432539[(_0x2571b3(0xff))](_0x793d4,_0xba7ed);return _0x5367a6[_0x2571b3(0xd4)](_0x5ccd98),_0x5ccd98;};initialize();