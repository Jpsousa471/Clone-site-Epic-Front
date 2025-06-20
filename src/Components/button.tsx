import React from "react";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";
React


function Button({text = 'My Button', className, variant, ...props}) {

    const buttonVariants = tv({
        base: "p-2 rounded-md",
        variants: {
            variant: {
                default: "bg-white text-black",
                secondary: "bg-indigo-600",
                ghost: "bg-transparent border border-black",
                destructive: "bg-red-600"
            }
        },
        defaultVariants: {
            variant: "default"
        }
    });

  return (
   <button className={twMerge(buttonVariants({variant}), className)} {...props}>
       {text}
   </button>
  )
}

export default Button
