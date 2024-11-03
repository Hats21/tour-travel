import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {

	--font: "Roboto Mono", monospace;

    --color-brand-50: #fef1f9;
		--color-brand-100: #fee5f4;
		--color-brand-200: #ffcbec;
		--color-brand-300: #ffa1da;
		--color-brand-400: #ff67c0;
		--color-brand-500: #f43f5e;
		--color-brand-600: #ec278a;
		--color-brand-700: #cc0a66;
		--color-brand-800: #a90b54;
		--color-brand-900: #8c0f48;
		--color-brand-950: #560128;
/* Stone */
  --color-stone-0: #fff;
		--color-stone-50: #fafaf9;
		--color-stone-100: #f5f5f4;
		--color-stone-200: #e7e5e4;
		--color-stone-300: #d6d3d1;
		--color-stone-400: #a8a29e;
		--color-stone-500: #78716c;
		--color-stone-600: #57534e;
		--color-stone-700: #44403c;
		--color-stone-800: #292524;
		--color-stone-900: #1c1917;
		--color-stone-950: #0c0a09;

    /* Slate */

    --color-slate-50: #f8fafc;
		--color-slate-100: #f1f5f9;
		--color-slate-200: #e2e8f0;
		--color-slate-300: #cbd5e1;
		--color-slate-400: #94a3b8;
		--color-slate-500: #64748b;
		--color-slate-600: #475569;
		--color-slate-700: #334155;
		--color-slate-800: #1e293b;
		--color-slate-900: #0f172a;
		--color-slate-950: #020617;


    --color-blue-500: #3b82f6;
		--color-blue-600: #2563eb;
		--color-blue-700: #1d4ed8;
		--color-blue-400: #0068af;
		--color-blue-300: #0068af;
		--color-blue-200: #1a77b7;
		--color-blue-100: #99c3df;

    --color-yellow-100: #fef9c3;
    --color-yellow-200: #fef08a;

    --color-yellow-300: #fde047;

		--color-yellow-400: #facc15;
		--color-yellow-500: #eab308;
		--color-yellow-600: #ca8a04;


		--color-green-100: #e9f9ef;
    --color-green-500: #22c55e;
		--color-green-600: #16a34a;
		--color-green-700: #15803d;
		--color-green-800: #166534;

}

		

    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

		*:focus {
      border: 1px solid var(--color-brand-600);
    }

		// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 700



    html {
      font-size: 62.5%;
			font-family: var(--font);
    }

		body {
			color: var(--color-stone-600);
			
		}
 
button {
  cursor: pointer;
}

*:disabled {
      cursor: not-allowed;
    }


		::-webkit-scrollbar {
			width: 5px;
		}

		::-webkit-scrollbar-track {
			background-color: var(--colorstone-0);
		}

		::-webkit-scrollbar-thumb {
			background-color: var(--color-stone-300);
			/* background: linear-gradient( red, green, yellow); */
			border-radius: 15px;
			
		}

 


`;

export default GlobalStyles;
