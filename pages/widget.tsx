function Widget() {
    return <div className="flex flex-center">
        <button>-</button>
        <div>0</div>
        <button>+</button>
    </div>
}

export const config = {
    unstable_runtimeJS: false,
  };

export default Widget