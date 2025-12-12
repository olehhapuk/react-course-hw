import Layout from "@/components/layout";

export default function HomeView() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl p-3 font-bold text-cyan-950" data-home-view>
          Hi! This is home page!
        </h1>
        <p>
          There is nothing interesting here, but you can click on the navbar and
          try some stuff if you wanna!
        </p>
        <img
          src="https://i.pinimg.com/736x/e3/75/c1/e375c13dba3e96216259c710977d9bd4.jpg"
          alt="cyan picture"
        ></img>
      </div>
    </Layout>
  );
}
