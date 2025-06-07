// components/Loader.jsx
import React from "react";

const Loader = () => {
    return (
        <div class="flex items-center justify-center min-h-screen">
            <div class="w-12 h-12 rounded-full animate-spin
              border-4 border-solid border-yellow-500 border-t-transparent">
            </div>
        </div>

    );
};

export default Loader;
