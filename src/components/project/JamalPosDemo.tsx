import { useState } from "react";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  RefreshCw,
  CreditCard,
  DollarSign,
} from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  qty: number;
  category: string;
}

const MENU_ITEMS = [
  {
    id: "item-1",
    name: "Cyber Nitro Cold Brew",
    price: 5.5,
    category: "Beverage",
    code: "NCB-01",
  },
  {
    id: "item-2",
    name: "Kyoto Matcha Latte",
    price: 6.0,
    category: "Beverage",
    code: "KML-04",
  },
  {
    id: "item-3",
    name: "Artisan Smoked Sourdough",
    price: 8.5,
    category: "Bakery",
    code: "SSD-12",
  },
  {
    id: "item-4",
    name: "Yuzu Glazed Croissant",
    price: 4.8,
    category: "Bakery",
    code: "YGC-07",
  },
  {
    id: "item-5",
    name: "Double Espresso Dark Roast",
    price: 4.0,
    category: "Beverage",
    code: "DED-02",
  },
  {
    id: "item-6",
    name: "Avocado Tartine & Truffle",
    price: 11.0,
    category: "Kitchen",
    code: "ATT-20",
  },
];

export function JamalPosDemo() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: "item-1",
      name: "Cyber Nitro Cold Brew",
      price: 5.5,
      qty: 2,
      category: "Beverage",
    },
    {
      id: "item-3",
      name: "Artisan Smoked Sourdough",
      price: 8.5,
      qty: 1,
      category: "Bakery",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const addToCart = (item: (typeof MENU_ITEMS)[0]) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p,
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          qty: 1,
          category: item.category,
        },
      ];
    });
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, qty: Math.max(0, p.qty + delta) } : p,
        )
        .filter((p) => p.qty > 0),
    );
  };

  const clearCart = () => {
    setCart([]);
    setOrderSuccess(false);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderSuccess(true);
      setTimeout(() => {
        setCart([]);
        setOrderSuccess(false);
      }, 3500);
    }, 1200);
  };

  const filteredItems =
    selectedCategory === "All"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div
      id="jamalpos-interactive-simulator"
      className="rounded-2xl border border-cyan-500/30 bg-[#0B0F17] p-4 sm:p-6 shadow-2xl overflow-hidden text-neutral-200"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <h4 className="font-semibold text-lg text-white">
              JamalPOS &bull; Live Checkout Terminal
            </h4>
          </div>
          <p className="text-xs text-neutral-400 mt-0.5">
            Test the 60 FPS sub-second cashier speed and micro-interactions
          </p>
        </div>

        <div className="flex items-center gap-2">
          {["All", "Beverage", "Bakery", "Kitchen"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-black font-semibold"
                  : "bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Menu Items Grid */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              onClick={() => addToCart(item)}
              className="flex flex-col justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/50 hover:bg-white/[0.06] transition text-left group active:scale-[0.98]"
            >
              <div>
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded">
                    {item.code}
                  </span>
                  <Plus className="w-4 h-4 text-neutral-500 group-hover:text-cyan-300 transition" />
                </div>
                <h5 className="font-medium text-sm text-neutral-100 mt-2 line-clamp-2">
                  {item.name}
                </h5>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-neutral-400">
                  {item.category}
                </span>
                <span className="font-mono text-sm font-semibold text-cyan-300">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Real-time Order Cart Terminal */}
        <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-black/40 border border-white/10 p-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  Current Ticket ({cart.reduce((a, b) => a + b.qty, 0)})
                </span>
              </div>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-red-400/80 hover:text-red-300 flex items-center gap-1 transition"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Clear
                </button>
              )}
            </div>

            {/* Cart List */}
            <div className="divide-y divide-white/5 max-h-48 overflow-y-auto my-2 pr-1">
              {cart.length === 0 ? (
                <div className="py-8 text-center text-xs text-neutral-500">
                  Ticket is empty. Tap any menu item on the left to begin an
                  order.
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="py-2.5 flex items-center justify-between text-xs"
                  >
                    <div className="flex-1 pr-2">
                      <div className="text-neutral-200 font-medium">
                        {item.name}
                      </div>
                      <div className="text-neutral-400 font-mono text-[11px]">
                        ${item.price.toFixed(2)} &times; {item.qty} = $
                        {(item.price * item.qty).toFixed(2)}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="p-1 rounded bg-white/10 hover:bg-white/20 text-neutral-300 transition"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center font-mono font-semibold">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="p-1 rounded bg-white/10 hover:bg-white/20 text-neutral-300 transition"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Pricing Summary */}
          <div className="border-t border-white/10 pt-3 mt-2 space-y-1.5">
            <div className="flex justify-between text-xs text-neutral-400">
              <span>Subtotal</span>
              <span className="font-mono">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs text-neutral-400">
              <span>City & State Tax (8%)</span>
              <span className="font-mono">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-white pt-1 border-t border-white/5">
              <span>Settlement Total</span>
              <span className="font-mono text-cyan-400">
                ${total.toFixed(2)}
              </span>
            </div>

            {orderSuccess ? (
              <div className="mt-3 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center gap-2 text-xs font-semibold animate-pulse">
                <CheckCircle2 className="w-4 h-4" />
                Payment Accepted &bull; Ticket #1049 Logged
              </div>
            ) : (
              <button
                onClick={handleCheckout}
                disabled={cart.length === 0 || isCheckingOut}
                className="w-full mt-3 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-black font-semibold text-xs tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition active:scale-[0.99]"
              >
                {isCheckingOut ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Transmitting to Gateway...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4" />
                    Instant Settle (${total.toFixed(2)})
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
