export async function load(onProgress) {
  const token=document.getElementById('pairing-token').value.trim();
  if(!token)throw Error('Start the local engine and paste its pairing token first.');
  onProgress(1);
  return {async describe(text){
    let response;try{response=await fetch('http://127.0.0.1:8768/describe',{method:'POST',headers:{'Content-Type':'application/json','X-Pairing-Token':document.getElementById('pairing-token').value.trim()},body:JSON.stringify({text}),signal:AbortSignal.timeout(180000)});}catch{throw Error('Cannot reach your local engine. Start it on your Mac, then allow local-network access if your browser asks. You can also open http://127.0.0.1:8768/ directly.');}
    const result=await response.json();if(!response.ok)throw Error(result.error??'Generation failed');return result;
  }};
}
