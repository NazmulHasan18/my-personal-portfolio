import { ValidationError, useForm } from "@formspree/react";
import Swal from "sweetalert2";
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const Contacts = () => {
   const [state, handleSubmit] = useForm("moqoqvpz");
   if (state.succeeded) {
      Swal.fire({
         position: "top-end",
         icon: "success",
         title: "Your mail has been send successful",
         showConfirmButton: false,
         timer: 1500,
      });
   }
   return (
      <div id="contacts" className="bg-zinc-900">
         <div className="container mx-auto" data-aos="fade-up" data-aos-duration="1500">
            <SectionTitle
               title="Contact"
               subtitle="I want to here from you"
               text="text-gray-300"
               color="gray"
            ></SectionTitle>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 pb-12">
               <div className="lg:w-2/3">
                  <form onSubmit={handleSubmit}>
                     <div className="card-body p-0">
                        <div className="flex flex-col lg:flex-row  gap-4">
                           <div className="form-control w-full">
                              <label className="label">
                                 <span className="label-text text-white">Name</span>
                              </label>
                              <input
                                 type="text"
                                 id="name"
                                 placeholder="Type here"
                                 name="name"
                                 className="input input-bordered input-info w-full text-lg"
                              />
                              <ValidationError prefix="name" field="name" errors={state.errors} />
                           </div>
                           <div className="form-control w-full">
                              <label className="label">
                                 <span className="label-text text-white">Email</span>
                              </label>
                              <input
                                 id="email"
                                 type="email"
                                 name="email"
                                 placeholder="Enter Your Email"
                                 className="input input-bordered input-info w-full text-lg"
                              />
                              <ValidationError prefix="email" field="email" errors={state.errors} />
                           </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5">
                           <div className="form-control w-full">
                              <label className="label">
                                 <span className="label-text text-white">Phone</span>
                              </label>
                              <input
                                 type="tel"
                                 id="phone"
                                 name="phone"
                                 placeholder="Enter Your Number"
                                 className="input input-bordered input-info w-full text-lg"
                              />
                              <ValidationError prefix="phone" field="phone" errors={state.errors} />
                           </div>
                           <div className="form-control w-full">
                              <label className="label">
                                 <span className="label-text text-white">Subject</span>
                              </label>
                              <input
                                 id="subject"
                                 type="text"
                                 name="subject"
                                 placeholder="Enter Subject"
                                 className="input input-bordered input-info w-full text-lg"
                              />
                              <ValidationError prefix="subject" field="subject" errors={state.errors} />
                           </div>
                        </div>
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text text-white">Message</span>
                           </label>
                           <textarea
                              id="message"
                              className="textarea textarea-info text-lg"
                              name="message"
                              placeholder="Type Your Text"
                              rows={4}
                           ></textarea>
                           <ValidationError prefix="message" field="message" errors={state.errors} />
                        </div>
                        <div className="form-control mt-6">
                           <button className="btn btn-warning w-52" type="submit">
                              Send Mail
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="lg:w-1/3 space-y-6 px-10">
                  <div className="flex gap-6">
                     <div className="p-6 bg-orange-100 text-3xl w-fit rounded-lg text-orange-600">
                        <IoCall></IoCall>
                     </div>
                     <div>
                        <h4 className="text-2xl text-white font-semibold">Phone</h4>
                        <p className="text-gray-300 text-lg">+8801904-723512</p>
                     </div>
                  </div>
                  <div className="flex gap-6">
                     <div className="p-6 bg-orange-100 text-3xl w-fit rounded-lg text-orange-600">
                        <IoMail></IoMail>
                     </div>
                     <div>
                        <h4 className="text-2xl text-white font-semibold">Email</h4>
                        <p className="text-gray-300 text-lg whitespace-pre-wrap">
                           nazmulhasanshanto
                           <br />
                           13@gmail.com
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-6">
                     <div className="p-6 bg-orange-100 text-3xl w-fit rounded-lg text-orange-600">
                        <IoLocation></IoLocation>
                     </div>
                     <div>
                        <h4 className="text-2xl text-white font-semibold">Address</h4>
                        <p className="text-gray-300 text-lg">Pabna, Rajshahi, Dhaka</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contacts;
