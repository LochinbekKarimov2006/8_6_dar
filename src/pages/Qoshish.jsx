import React, { useEffect, useState } from "react";
function Qoshish() {
  const [ochish, setYopish] = useState(false);
  const [colors, setColor] = useState(false);
  const [text, setText] = useState("Ish maydoni");
  const [images, setImages] = useState(false);
  const [bg_color, SetBg_Coloes] = useState(false);
  const [bg_images, setBg_images] = useState("#fff");
  const [imagest, setImagest] = useState(null);
  const [colorse, setColorse] = useState(null);

  // Konsolda ko'rish uchun
  console.log("bg_images:", bg_images);
  console.log("imagest:", imagest);
  console.log("colorse:", colorse);

  function imagests() {
    if (bg_images.includes("/")) {
      setImagest(bg_images); // Agar bg_images manzil bo'lsa, imagest ga saqlanadi
      setColorse(null); // colorse ni tozalaymiz
      console.log("Image detected");
    } else {
      setColorse(bg_images); // Agar rang bo'lsa, colorse ga saqlanadi
      setImagest(null); // imagest ni tozalaymiz
      console.log("Color detected");
    }
  }

  useEffect(() => {
    imagests();
  }, [bg_images]);
  function color() {
    if (colors) {
      console.log("salom");
      setColor(false);
    } else {
      console.log("hayir");
      setColor(true);
    }
  }
  function bg_colors() {
    if (bg_color) {
      SetBg_Coloes(false);
    } else {
      SetBg_Coloes(true);
    }
  }
  function image() {
    if (images) {
      console.log("salom");
      setImages(false);
    } else {
      console.log("hayir");
      setImages(true);
    }
  }
  function Yopish() {
    if (ochish) {
      setYopish(false);
    } else {
      setYopish(true);
    }
  }
  return (
    <>
      <div className="relative">
      <div className="max-w-[1280px] mx-auto mt-10">
  <div>
    <h3 className="text-[28px] tracking-wider flex items-center font-[600] gap-3">
      <img
        className="w-10"
        src="https://cdn-icons-png.flaticon.com/512/7329/7329814.png"
        alt=""
      />
      Yaqinda korilgan
    </h3>
    <div className="mt-5 tracking-widest">
      <button className="w-[250px] h-[150px] bordedr-[1px] bg-white rounded-[10px]">
        Doska yaratish
      </button>
    </div>
  </div>

  <div className="mt-14">
    <h3 className="text-[32px] tracking-wider flex items-center font-[600] gap-3">
      Sizning ish joyingiz
    </h3>
    <div className="text-[22px] tracking-wider flex gap-4 mt-5">
      <button className="btn text-[22px] btn-neutral">Taxtalar</button>
      <button className="btn text-[22px] btn-neutral">Taqdimotlar</button>
      <button className="btn text-[22px] btn-neutral">Ishtirokchilar</button>
      <button className="btn text-[22px] btn-neutral">Sozlamalar</button>
      <button className="btn text-[22px] btn-neutral">Oshirish</button>
      <button
        onClick={() => {
          Yopish();
        }}
        className="btn text-[22px] btn-neutral"
      >
        Taxta yaratish
      </button>
    </div>

    <div className="mt-10 tracking-widest flex flex-wrap gap-5 w-[1280px]">
      <button className="w-[230px] h-[130px] bordedr-[1px] bg-white rounded-[10px]">
        Doska yaratish
      </button>
      <button className="w-[230px] h-[130px] bordedr-[1px] bg-white rounded-[10px]">
        Doska yaratish
      </button>
      <button className="w-[230px] h-[130px] bordedr-[1px] bg-white rounded-[10px]">
        Doska yaratish
      </button>
      <button className="w-[230px] h-[130px] bordedr-[1px] bg-white rounded-[10px]">
        Doska yaratish
      </button>
      <button className="w-[230px] h-[130px] bordedr-[1px] bg-white rounded-[10px]">
        Doska yaratish
      </button>
    </div>
  </div>
      </div>

        {ochish && (
          <div className="absolute  w-full flex justify-center top-[-20px] tracking-[1px]">
            <div>
              <div className="relative">
                <div className="z-10 absolute bg-base-200 w-[400px] p-5 font-[600] rounded-[10px] drop-shadow-lg ">
                  <div>
                    <div className="flex gap-[25%] text-end w-full justify-end pb-5 items-center">
                      <h3 className="font-[600] text-[18px]">Doska yaratish</h3>
                      <button
                        onClick={() => {
                          setYopish(false);
                        }}
                        className="rounded-[50%] bg-[#ffffff36] p-2 hover:bg-[#fff]"
                      >
                        <img
                          className="w-3"
                          src="   https://cdn-icons-png.flaticon.com/512/1828/1828778.png "
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <div
                        style={
                          colorse
                            ? { backgroundColor: colorse }
                            : {
                                backgroundImage: `url(${imagest})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundPositionX: "center",
                              }
                        }
                        className=" w-[250px] h-[130px] flex justify-between p-2 pt-4 rounded-[5px]"
                      >
                        <div className="bg-[#c1c0c0] w-[30%] flex flex-col gap-2  p-2 rounded-[5px]">
                          <p className="max-w-[20px]  h-2 bg-white rounded-[2px]"></p>
                          <p className="max-w-[100%]  h-4 bg-white rounded-[2px]"></p>
                          <p className="max-w-[100%]  h-4 bg-white rounded-[2px]"></p>
                          <p className="max-w-[100%] h-9  bg-white rounded-[2px]"></p>
                        </div>
                        <div className="bg-[#c1c0c0] h-[70%] w-[30%] flex flex-col gap-2  p-2 rounded-[5px]">
                          <p className="max-w-[20px]   h-2 bg-white rounded-[2px]"></p>
                          <p className="max-w-[100%]  h-4 bg-white rounded-[2px]"></p>
                          <p className="max-w-[100%] h-9  bg-white rounded-[2px]"></p>
                        </div>
                        <div className="bg-[#c1c0c0] h-[90%] w-[30%] flex flex-col gap-2  p-2 rounded-[5px]">
                          <p className="max-w-[20px]  h-2 bg-white rounded-[2px]"></p>
                          <p className="max-w-[100%]  h-4 bg-white rounded-[2px]"></p>
                          <p className="max-w-[100%]  h-4 bg-white rounded-[2px]"></p>
                          <p className="max-w-[100%] h-7  bg-white rounded-[2px]"></p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      Fon
                      <div className="flex justify-between ">
                        <button
                          onClick={() => {
                            setBg_images(
                              "https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13"
                            );
                          }}
                          className="w-[24%]"
                        >
                          <img
                            className="w-full h-14 rounded-[5px]"
                            src="https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13"
                            alt=""
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBg_images();
                          }}
                          className="w-[24%]"
                        >
                          <img
                            className="w-full h-14 rounded-[5px]"
                            src="https://avatars.mds.yandex.net/i?id=b54190d5d43f422dcdf67fabc5f70218_l-4284908-images-thumbs&n=13"
                            alt=""
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBg_images();
                          }}
                          className="w-[24%]"
                        >
                          <img
                            className="w-full h-14 rounded-[5px]"
                            src="https://i.pinimg.com/originals/10/a6/b8/10a6b89b11f9e6e57b67f476cb658c1d.jpg"
                            alt=""
                          />
                        </button>
                        <button
                          onClick={() => {
                            setBg_images();
                          }}
                          className="w-[24%]"
                        >
                          <img
                            className="w-full h-14 rounded-[5px]"
                            src="https://avatars.mds.yandex.net/i?id=1a2b77f39ba1637ab0e5224e7e4013e1_l-5250549-images-thumbs&n=13"
                            alt=""
                          />
                        </button>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <button
                          onClick={() => {
                            setBg_images("#000");
                          }}
                          className="bg-[#000] w-[55px] h-[40px] rounded-[5px]"
                        ></button>
                        <button
                          onClick={() => {
                            setBg_images();
                          }}
                          className="bg-[#04f6b9] w-[55px] h-[40px] rounded-[5px]"
                        ></button>
                        <button
                          onClick={() => {
                            setBg_images();
                          }}
                          className="bg-[#2cf405] w-[55px] h-[40px] rounded-[5px]"
                        ></button>
                        <button
                          onClick={() => {
                            setBg_images();
                          }}
                          className="bg-[#f60202] w-[55px] h-[40px] rounded-[5px]"
                        ></button>
                        <button
                          onClick={() => {
                            setBg_images();
                          }}
                          className="bg-[#0b03f5] w-[55px] h-[40px] rounded-[5px]"
                        ></button>
                        <button
                          onClick={() => {
                            color();
                          }}
                          className="bg-[#fff0] w-[55px] h-[40px] rounded-[5px] border-[1px] hover:bg-slate-50"
                        >
                          {" "}
                          ৹৹৹{" "}
                        </button>
                      </div>
                    </div>
                    <label className="flex flex-col mt-5" htmlFor="">
                      Kengash sarlavhasi*
                      <input
                        type="text"
                        className="input input-bordered input-accent w-full "
                      />
                    </label>
                    <h2>👋🏻 Kengash nomini korsating.</h2>
                    <label className="flex flex-col mt-5" htmlFor="">
                      shhgkgfj reg
                      <div className="dropdown">
                        <div
                          tabIndex={0}
                          role="button"
                          className="select select-info w-full dropdown flex items-center text-[16px]"
                        >
                          {text}
                        </div>
                        <div>
                          <div
                            tabIndex={0}
                            className="w-full dropdown-content  absolute left-0 right-0 rounded-[10px]  bg-base-100 mt-5 drop-shadow-lg"
                          >
                            <div className="overflow-y-auto no-scrollbar shadow-inner h-[270px] ">
                              <div
                                onClick={() => {
                                  setText("Xafsizlik");
                                }}
                                className="flex py-5 hover:bg-base-300"
                              >
                                <h2 className="w-[15%] flex flex-col justify-center px-2">
                                  <img
                                    className="w-10"
                                    src="   https://cdn-icons-png.flaticon.com/512/2913/2913133.png "
                                    alt=""
                                  />
                                </h2>
                                <div className="w-[80%]">
                                  <h4 className="text-[20px]">Xususiy</h4>
                                  <p className="tracking-widest">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Veniam, repudiandae!
                                    Necessitatibus ea explicabo ullam ab veniam
                                    earum, perspiciatis perferendis ducimus?
                                  </p>
                                </div>
                              </div>
                              <div
                                onClick={() => {
                                  setText("Ish maydoni");
                                }}
                                className="flex py-5 hover:bg-base-300"
                              >
                                <h2 className="w-[15%] flex flex-col justify-center px-2">
                                  <img
                                    className="w-10"
                                    src="   https://cdn-icons-png.flaticon.com/512/2913/2913133.png "
                                    alt=""
                                  />
                                </h2>
                                <div className="w-[80%]">
                                  <h4 className="text-[20px]">Ish maydoni</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Veniam, repudiandae!
                                    Necessitatibus ea explicabo ullam ab veniam
                                    earum, perspiciatis perferendis ducimus?
                                  </p>
                                </div>
                              </div>
                              <div
                                onClick={() => {
                                  setText("Omaviy");
                                }}
                                className="flex py-5 hover:bg-base-300"
                              >
                                <h2 className="w-[15%] flex flex-col px-2 justify-center">
                                  <img
                                    className="w-10"
                                    src="   https://cdn-icons-png.flaticon.com/512/2913/2913133.png "
                                    alt=""
                                  />
                                </h2>
                                <div className="w-[80%]">
                                  <h4 className="text-[20px]">Omaviy</h4>
                                  <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Veniam, repudiandae!
                                    Necessitatibus ea explicabo ullam ab veniam
                                    earum, perspiciatis perferendis ducimus?
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                    <button className="btn btn-outline w-full mt-7">
                      Yuklab olihs
                    </button>
                    <button className="btn btn-outline w-full mt-3">
                      Vakhjsf tewDKKWR
                    </button>
                    <span class="icon-sm icon-board boards-page-board-section-header-options-item-icon"></span>
                    <p className="text-[14px] tracking-[2px] mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      consectetur doloribus! Numquam, illum error.
                    </p>
                  </div>
                </div>
                {colors && (
                  <div className="bg-base-200 drop-shadow-lg w-[400px] p-5 rounded-[10px]  absolute z-30 top-20 left-[420px] ">
                    <div className="flex gap-[25%] text-end w-full justify-end py-3 items-center">
                      <h3 className="font-[600] text-[18px]">Doska yaratish</h3>
                      <button
                        onClick={() => {
                          color();
                        }}
                        className="rounded-[50%] bg-[#ffffff36] p-2 hover:bg-[#fff]"
                      >
                        <img
                          className="w-3"
                          src="   https://cdn-icons-png.flaticon.com/512/1828/1828778.png "
                          alt=""
                        />
                      </button>
                    </div>
                    <div className="relative">
                      <div className="flex justify-between my-2">
                        <h2>Fontslae</h2>
                        <button
                          onClick={() => {
                            image();
                          }}
                          className="btn btn-sm btn-active btn-secondary"
                        >
                          Batfsillllllll
                        </button>
                      </div>
                      <div>
                        <div className="div-1">
                          <button
                            onClick={() => {
                              setBg_images();
                            }}
                          >
                            <img
                              src="https://avatars.mds.yandex.net/i?id=4f7586d49edaa427e07a8819562fc284_l-5248434-images-thumbs&n=13"
                              alt=""
                            />
                          </button>
                          <button
                            onClick={() => {
                              setBg_images();
                            }}
                          >
                            <img
                              src="https://avatars.mds.yandex.net/i?id=b54190d5d43f422dcdf67fabc5f70218_l-4284908-images-thumbs&n=13"
                              alt=""
                            />
                          </button>
                          <button
                            onClick={() => {
                              setBg_images();
                            }}
                          >
                            <img
                              src="https://i.pinimg.com/originals/10/a6/b8/10a6b89b11f9e6e57b67f476cb658c1d.jpg"
                              alt=""
                            />
                          </button>
                          <button
                            onClick={() => {
                              setBg_images();
                            }}
                          >
                            <img
                              src="https://avatars.mds.yandex.net/i?id=1a2b77f39ba1637ab0e5224e7e4013e1_l-5250549-images-thumbs&n=13"
                              alt=""
                            />
                          </button>
                          <button
                            onClick={() => {
                              setBg_images();
                            }}
                          >
                            <img
                              src="https://i.pinimg.com/originals/b1/02/dc/b102dcda56577ee8b860b89dadf0f4c0.jpg"
                              alt=""
                            />
                          </button>
                          <button
                            onClick={() => {
                              setBg_images();
                            }}
                          >
                            <img
                              src="https://image.winudf.com/v2/image/Y29tLndhbGxwYXBlcndvcmxkcy5yZXZvbGFydF9zY3JlZW5fNF9iMTA3bTBzbQ/screen-4.jpg?fakeurl=1&type=.jpg"
                              alt=""
                            />
                          </button>
                        </div>
                        {images && (
                          <div className="absolute  w-[410px] bottom-[-280px] bg-base-200 p-5 left-0 drop-shadow-lg rounded-[10px] z-10">
                            <div className="flex justify-between items-center py-2">
                              <p className="text-[20px] font-[600]">Ranglar</p>
                            </div>
                            <div className="div-1 pt-2">
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://smallgroupnetwork.com/wp-content/uploads/2017/05/amazing-animal-beautiful-beautifull.jpg"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://dasart.ru/userdata/image/63/8c/638c0d4b54fda541ee98e50875d9a831.jpg"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://www.newkaliningrad.ru/resize/900x600/upload/iblock/a45/zqtbfcmywyugg7tbfgt62gphsk1tx0fe.jpg"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://i.redd.it/y5fk4e5lcuuz.jpg"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://cdn1.ozone.ru/s3/multimedia-8/6465020324.jpg"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://avatars.mds.yandex.net/get-mpic/3934197/img_id2400378468325171676.jpeg/orig"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://avatars.mds.yandex.net/get-mpic/6219218/img_id1978363761087820185.jpeg/orig"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://wallup.net/wp-content/uploads/2019/09/175148-scenery-sky-mountains-grass-nature.jpg"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://avatars.mds.yandex.net/get-mpic/5173454/img_id5379542027415187963.jpeg/orig"
                                  alt=""
                                />
                              </button>
                            </div>
                            <div className="border-b-[1px] border-[#f0f0f04b] py-2"></div>
                            <div className="div-1 mt-4">
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://main-cdn.sbermegamarket.ru/hlr-system/135/955/726/152/175/9/600011875847b0.jpeg"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://avatars.mds.yandex.net/i?id=da0a1b7395b36a884f28ae8a3f8f4383_l-5165563-images-thumbs&n=13"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://i.pinimg.com/originals/1a/2c/33/1a2c33c72e0e953dc0842c198784a7ef.jpg"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://avatars.mds.yandex.net/i?id=46729492e064ed566b95d404777eeb3d_l-10695130-images-thumbs&ref=rim&n=13&w=1280&h=720"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://naked-science.ru/wp-content/uploads/2016/04/article_wave-sea-water-ocean-splash-nature-1800x2880.jpg"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://avatars.mds.yandex.net/get-mpic/5232651/img_id8067509333734739102.jpeg/orig"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://avatars.mds.yandex.net/get-mpic/5319505/img_id3754869592499096480.jpeg/orig"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://avatars.mds.yandex.net/get-mpic/1599966/img_id6646345198442202241.jpeg/orig"
                                  alt=""
                                />
                              </button>
                              <button
                                onClick={() => {
                                  setBg_images();
                                }}
                                className="bg-[#000]"
                              >
                                <img
                                  src="https://avatars.mds.yandex.net/i?id=753e7c17d45612b14131594cc4c07059_l-7552222-images-thumbs&ref=rim&n=13&w=1000&h=669"
                                  alt=""
                                />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="relative w-[100%]">
                      <div className="flex justify-between my-2 mt-4">
                        <h2>Fontslae</h2>
                        <button
                          onClick={() => {
                            bg_colors();
                          }}
                          className="btn btn-sm btn-active btn-secondary"
                        >
                          Batfsil
                        </button>
                      </div>
                      <div className="div-1">
                        <button
                          onClick={() => {
                            setBg_images();
                          }}
                          className="bg-[#0b048f]"
                        ></button>
                        <button
                          onClick={() => {
                            setBg_images();
                          }}
                          className="bg-[#f10606]"
                        ></button>
                        <button
                          onClick={() => {
                            setBg_images();
                          }}
                          className="bg-[#f09409]"
                        ></button>
                        <button
                          onClick={() => {
                            setBg_images();
                          }}
                          className="bg-[#e806c6]"
                        ></button>
                        <button
                          onClick={() => {
                            setBg_images();
                          }}
                          className="bg-[#2ff009]"
                        ></button>
                        <button
                          onClick={() => {
                            setBg_images();
                          }}
                          className="bg-[#09e1f0]"
                        ></button>
                      </div>
                      {bg_color && (
                        <div className="absolute w-[410px] bottom-[-70px] bg-base-200 p-5 left-0 drop-shadow-lg rounded-[10px] z-30">
                          <div className="flex justify-between items-center py-2">
                            <p className="text-[20px] font-[600]">Ranglar</p>
                          </div>
                          <div className="div-1 pt-2">
                            <button
                              onClick={() => {
                                setBg_images();
                              }}
                              className="bg-[#000]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images();
                              }}
                              className="bg-[#f56c03]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images();
                              }}
                              className="bg-[#e6f603]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images();
                              }}
                              className="bg-[#50f404]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images();
                              }}
                              className="bg-[#02fff2]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images();
                              }}
                              className="bg-[#044aec]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images();
                              }}
                              className="bg-[#8604e8]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images();
                              }}
                              className="bg-[#e909b8]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images();
                              }}
                              className="bg-[#f50404]"
                            ></button>
                          </div>
                          <div className="border-b-[1px] border-[#f0f0f04b] py-2"></div>
                          <div className="div-1 mt-4">
                            <button
                              onClick={() => {
                                setBg_images("#f40370");
                              }}
                              className="bg-[#f40370]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images("#1f0630");
                              }}
                              className="bg-[#1f0630]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images("#012632");
                              }}
                              className="bg-[#012632]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images("#25793e");
                              }}
                              className="bg-[#25793e]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images("#e0b414");
                              }}
                              className="bg-[#e0b414]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images("#17194d");
                              }}
                              className="bg-[#17194d]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images("#03ead6");
                              }}
                              className="bg-[#03ead6]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images("#07b8ed");
                              }}
                              className="bg-[#07b8ed]"
                            ></button>
                            <button
                              onClick={() => {
                                setBg_images("#eb6906");
                              }}
                              className="bg-[#eb6906]"
                            ></button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
        {colors && (
          <div
            onClick={() => {
              setColor(false);
            }}
            className="absolute top-0 bottom-0 left-0 right-0 bg-[#00000000] z-10"
          ></div>
        )}
        {images && (
          <div
            onClick={() => {
              setImages(false);
            }}
            className="absolute z-20 top-0 bottom-0 left-0 right-0 bg-[#ffffff00]"
          ></div>
        )}
        {bg_color && (
          <div
            onClick={() => {
              SetBg_Coloes(false);
            }}
            className="absolute z-[25] top-0 bottom-0 left-0 right-0 bg-[#ffffff00]"
          ></div>
        )}
    </>
  );
}

export default Qoshish;
