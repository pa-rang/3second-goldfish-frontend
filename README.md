# π3Second-Goldfish-Frontend
<br/>

## μλΉμ€λͺ
π κΆκΈλΆμ΄
<br/>
Project Period : 2021.05.22 ~ 2021.05.23
## νλ‘μ νΈ μκ° 
π‘μ€λ λ­νλΆμ΄? μΌ...μ΄...μΌ..... λ‘!!! μ€λ μμλ μΌ 3μ΄ μμ λλ΅ λͺ»νλ©΄ κΈ°μ΅ μ‘°μ!
</br>
π‘μ€λ νλ£¨μ λν μ§λ¬Έμ΄ λ μμ€λ©΄ 3μ΄μμ λλ΅ν΄λΌ! 
</br>  μκ°μμ μ μμ±νλ€λ©΄ λλ§μ μΌκΈ° μμ±π€© κ·Έλ μ§ μλ€λ©΄ κΈ°μ΅ μ‘°μ μΌκΈ° νμπ₯ 
</br>

## κ°λ° λ΄λΉ λΆλΆ
πκΉν¨μΈ
```
*λ©μΈλ·° κ΅¬ν
*test κ²°κ³Ό μ κ·Έλ£Ή μΆκ° page
```
πμ΄μ μ°
```
*test μ§λ¬Έ νμ΄μ§ κ΅¬ν
*test κ²°κ³Ό κ³΅μ  κ·Έλ¦¬λ κ΅¬ν
```
πμ‘°μ€μ
```
*test κ²°κ³Ό νμ΄μ§ κ΅¬ν
*test κ²°κ³Ό νμ κ΅¬ν
```
</br>

## νλ‘μ νΈ κ³Όμ 
```
[1] main νμ΄μ§μμ μμ λ²νΌκ³Ό ν¨κ» μ§λ¬Έμ΄ μ£Όμ΄μ§λ€.
[2] 3μ΄μμ λ΅ν΄μΌνλ©°, 3μ΄μμ λ΅νμ§ λͺ»νλ€λ©΄ λλ€μΌλ‘ λ΅μ΄ λ€μ΄κ°λ€.
[3] λͺ¨λ  μ§λ¬Έμ λ΅μ μμ±νλ©΄ λλ§μ μΌκΈ° μ±κ³΅! 
[4] κ²°κ³Ό μ΄λ―Έμ§λ₯Ό μ μ₯νκ±°λ κ·Έλ£Ήμ κ³΅μ ν  μ μμΌλ©° μλ‘μ΄ κ·Έλ£Ήλ μμ± κ°λ₯νλ€.
[5] ν΄λΉ κ·Έλ£Ήμ λ€μ΄κ°λ©΄ κ³΅μ ν κ·Έλ¦¬λλ₯Ό νμΈν  μ μλ€.
```

## νλ‘μ νΈ κ΅¬μ‘°
```
public
 β£ images
 β β£ MainLogo.png
 β β£ ...
 β β img_speechbubble.svg
 β favicon.ico
src
 β£ pages
 β β£ question
 β β β£ index.tsx
 β β£ AddNewGroup.js
 β β£ _app.tsx
 β β result
 β β β£ index.tsx
 β β£ index.js
 β β 
 β£ components
 β β£ question
 β β β WhoMeetQuestion.tsx
 β β β InputQuestion.tsx
 β β Modal.jsx
 β£ lib
 β β£ constants
 β β β questionList.ts
 β β hooks
 β β β iseInput.ts
 β£ utils
 β β convertHtmlToPng.ts
 β  
 β£ states
 β index.ts 
 styles
 β globals.css
 types
 β index.ts
 

```
## μλ² μ°κ²°μ½λ
```
import { client } from './';

export const postQuestions = async body => {
	try {
		const { data } = await client.post('/question', body);
	} catch (err) {
		throw err;
	}
};

export const postGroup = async body => {
	try {
		const { data } = await client.post('/group', body);
	} catch (err) {
		throw err;
	}
};
```

```
const handleClick = async () => {
		await postQuestions({ postText: allAnswer });
	};
 ```

## μ¬μ©ν λͺ¨λ
```

    "@emotion/react": "^11.4.0",
    "@emotion/styled": "^11.3.0",
    "axios": "^0.21.1",
    "next": "10.2.2",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "recoil": "^0.3.1",
    "styled-components": "^5.3.0"
  
    "@types/react": "17.0.6",
    "eslint": "^7.27.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^3.4.0",
    "eslint-plugin-react": "^7.23.2",
    "eslint-plugin-react-hooks": "^4.2.0",
    "prettier": "^2.3.0",
    "typescript": "4.2.4"
 
```
## Code Convention
* Git Branch
κΈ°λ₯λ³λ‘ branch κ΅¬μ±

* git commit message rule
```
[feat] κΈ°λ₯ μΆκ°
[fix] λ²κ·Έ μμ 
[chore] κ°λ¨ν μμ 
[docs] λ¬Έμ
```

## πΌνλ‘μ νΈ λ°°ν¬ λ§ν¬
https://3second-goldfish.vercel.app/
