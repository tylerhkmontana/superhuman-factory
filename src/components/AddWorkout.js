export default function CreateProgram({ isToggled, setIsToggled }) {
  return (
    <div
      className={`fixed z-50 w-screen h-screen backdrop-blur-sm top-0 left-0 ${
        isToggled || "hidden"
      } py-24 px-4 flex justify-center items-center`}
    >
      <form className="w-full h-full bg-gray-200 relative flex flex-col justify-between py-12 px-4 gap-4">
        <span
          className="font-bold absolute top-4 right-4"
          onClick={() => setIsToggled(false)}
        >
          X
        </span>
      </form>
    </div>
  );
}
