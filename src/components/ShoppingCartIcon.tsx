import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ShoppingCartIcon = () => {
  return (
    <Link href="/cart" className="relative">
        <ShoppingCart className="w-4 h-4 text-gray-600"/>
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 text-gray-600 rounded-full flex items-center justify-center text-xs font-medium">0</span>
    </Link>
  );
};

export default ShoppingCartIcon;