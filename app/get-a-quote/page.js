import AboutUs from "../about-us/page";

export default function getAQuotePage () {
  return (
    <main>

<div className="flex flex-col items-center justify-center min-h-screen bg-[#191919] py-16 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <iframe
          src="https://whatsform.com/cvpmkh"
          className="w-full h-[1750px] border-none"
          style={{ overflow: 'hidden' }}
          title="WhatsForm"
        ></iframe>
      </div>
    </div>
  
  {/* <div>
   
      <iframe
        src="https://whatsform.com/cvpmkh"
        width="100%"
        height="1200"
        style={{ background: 'white', border: 'black' }}
        title="WhatsForm"
      ></iframe>
    </div> */}
 
    </main>
  );
}

