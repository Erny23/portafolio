export default function Home() {
  return (
    <div>
      <div className="pb-3 border-b">
        <h1 className="title text-xl text-[#323232] font-bold">
          <span className="text-[#4c7753]">Sobre</span> mi
        </h1>
      </div>
      <div className="mt-5 text-[#646464]">
        <p>
          <strong>Lorem ipsum dolor sit</strong>, amet consectetur adipisicing elit. Cum, suscipit laborum odio aspernatur praesentium, delectus nam, sapiente nobis maiores labore quos minus dignissimos numquam molestias tenetur eius natus. Beatae, at.
        </p>
      </div>
      <br />
      <div>
        <ul className="text-[#646464] text-base font-light">
          <li>
            <strong>Edad . . . . .</strong> 24
          </li>
          <li>
            <strong>Residencia . . . . .</strong> Venezuela
          </li>
          <li>
            <strong>Ocupación . . . . .</strong> Freelancer
          </li>
          <li>
            <strong>Dirección . . . . .</strong> Carabobo, Valencia
          </li>
        </ul>
      </div>
      <br />
      <div>
        <div className="pb-3">
          <h1 className="title text-xl text-[#323232] font-bold">
            <span className="text-[#4c7753]">Mis</span> servicios
          </h1>
        </div>
        <div id="servicios" className="border-t">
          <div className="w-[50%] p-5 inline-block">
            <h5 className="font-semibold">Front-end</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ex aliquid dolore cumque minima beatae deserunt illo.</p>
          </div>
          <div className="w-[50%] p-5 inline-block">
            <h5 className="font-semibold">Back-end</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ex aliquid dolore cumque minima beatae deserunt illo.</p>
          </div>
          <div className="w-[50%] p-5 inline-block">
            <h5 className="font-semibold">WordPress</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ex aliquid dolore cumque minima beatae deserunt illo.</p>
          </div>
          <div className="w-[50%] p-5 inline-block">
            <h5 className="font-semibold">WordPress Security</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, ex aliquid dolore cumque minima beatae deserunt illo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
