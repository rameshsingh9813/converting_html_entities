function convertHTML(str) {
   let k=str.split('')
   for(let i in k){
       if(k[i]=="<"){
           k[i]='&lt;';
       }
       else if(k[i]==">"){
           k[i]='&gt;';
       }
       else if(k[i]=="'"){
           k[i]='&apos;';
       }
       else if(k[i]=="&"){
           k[i]='&&;';
       }
       else if(k[i]=='"'){
           k[i]='&quot;';
       }
       else{
           k[i]=k[i];
       }
   }
   k=k.join('')
    return k
  }
  
  console.log(convertHTML("abc"));
//   convertHTML("Dolce & Gabbana") should return the string Dolce &amp; Gabbana.

// convertHTML("Hamburgers < Pizza < Tacos") should return the string Hamburgers &lt; Pizza &lt; Tacos.

// convertHTML("Sixty > twelve") should return the string Sixty &gt; twelve.

// convertHTML('Stuff in "quotation marks"') should return the string Stuff in &quot;quotation marks&quot;.

// convertHTML("Schindler's List") should return the string Schindler&apos;s List.

// convertHTML("<>") should return the string &lt;&gt;.

// convertHTML("abc") should return the string abc.