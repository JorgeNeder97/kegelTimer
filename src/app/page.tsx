import Counter from "@/components/Counter";

const Kegel = () => {



    return (
        <div className="bg-background text-white w-full h-[100vh] flex flex-col place-items-center place-content-center gap-[50px]">
            <h1 className="font-semibold text-center text-4xl w-[85%] max-w-[600px]">Temporizador Kegel</h1>
            <Counter />
        </div>
    );
};

export default Kegel;
