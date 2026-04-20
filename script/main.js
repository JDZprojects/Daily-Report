let rowss = [];
// Mengendalikan data input
document.getElementById('csvInput').addEventListener('change', function(event) {
    // Membuka data CSV
    const file = event.target.files[0];
    if (!file) return;
    // Render file menjadi data yang dapat dibaca program
    const reader = new FileReader();
    reader.onload = function(e) {
        // Mengolah data agar data dapat digunakan
        const csvContent = e.target.result;
        let data = CSVstring_to_Array(csvContent);
        // data = filterByColumnByColumn(data, 'STO DATABASE', null, 'exclude');
        
        // perhitungan isi tanggal dan waktu
        renderDateTime();
        // mapping branch
        let branch = filterByColumn(data, 'STO DATABASE', null, 'exclude');
        data.forEach(row => {
            const workzone = (row['WORKZONE']||'').toString();
            branch.forEach(index => {
                let sto = (index['STO DATABASE']||'').toString();
                if (workzone.includes(sto)){
                    row['BRANCH'] = index['BRANCH DATABASE'];
                    row['AREA'] = index['AREA DATABASE'];
                }
            })
        })

        // menghapus baris yang tidak terpakai
        rowss = filterByColumn(data, 'SUMMARY', 'TSEL_METRO', 'include');
        if (!rowss||rowss.lenght === 0){
            console.warn("There is no data");
        }rowss
        
        // menentukan "SEVERITY","TOTAL TIKET", dan "TARGET" berdasarkan isi "SUMMARY"
        rowss.forEach(row => {
            const summary = (row['SUMMARY'] || '').toString();
            row['TOTAL TIKET'] = 1;

            row['SEVERITY'] = 
            summary.includes('PREMIUM')?summary.includes('PREVENTIVE')? 
            'PREMIUM PREVENTIVE':'PREMIUM':
            summary.includes('CRITICAL')?'CRITICAL':
            summary.includes('MAJOR')?'MAJOR':
            summary.includes('MINOR')?'MINOR':
            summary.includes('LOW')?'LOW':'none';
            
            // penentuan target dari setiap severity, jika tidak ada kata kunci yang sesuai maka target defaultnya adalah 24
            row['TARGET'] = 
            summary.includes('PREMIUM')? summary.includes('PREVENTIVE')?24:2://jika premium preventive maka targetnya 24, jika hanya premium maka targetnya 2
            summary.includes('CRITICAL')?4: //jika critical maka targetnya 4
            summary.includes('MAJOR')?8://jika major maka targetnya 8
            summary.includes('MINOR')?16:24;//jika minor maka targetnya 16 dan defult targetnya 24

            // https://medium.com/@hxu0407/9-smart-ways-to-replace-if-else-in-javascript-28f82ad6dcb9
        });
        //Perhitungan untuk kolom durasi
        //fungsi untuk mengubah format waktu menjadi desimal
        function timeToDecimal(timeStr){
            let hours,minutes,seconds;
            [hours,minutes,seconds] = 
            timeStr.includes(':')? timeStr.split(':').map(Number):
            timeStr.includes('.')? timeStr.split('.').map(Number):
            timeStr.includes('/')? timeStr.split('/').map(Number):
            timeStr.includes('-')? timeStr.split('-').map(Number):
            (console.warn("WADAW, pemisah waktunya harus antara :|.|/|- "), [0,0,0]);
            return hours + (minutes/60) + (seconds/3600);
        }
        // menentukan "DURASI" berdasarkan "TTR CUSTOMER"
        rowss.forEach(row=>{
            const TTR = (row['TTR CUSTOMER']||'').toString();
            row['DURASI']= Math.round(timeToDecimal(TTR) * 100) / 100;
        });
        //data, reference, sortby, referenceby
        let table = Sort(rowss, branch, 'WORKZONE', 'STO');
        console.log('test',table);
        
        // filter untuk menampilkan defult table 
        table = SeverityFilter(table,["PREMIUM PREVENTIVE","PREMIUM", "CRITICAL", "MAJOR","MINOR","LOW"]);
        table = Sort(table,["PREMIUM PREVENTIVE","PREMIUM", "CRITICAL", "MAJOR","MINOR","LOW"], 'SEVERITY');
        // render tabel untuk ditampilkan pada web
        renderTableFromCSV(table, 'tableData', ['SEVERITY', 'INCIDENT','AREA', 'BRANCH', 'WORKZONE','TARGET','DURASI', 'SUMMARY','TOTAL TIKET']); 
        console.log(table); // Parsed CSV as an array of objects
        
        
        //proses untuk dalam floating Box
        let preCount = 0; //Premium
        let prevCount = 0; //Premium Preventive
        let CritCount = 0; //Critical
        let MajCount = 0; //Major
        let MinCount = 0; //Minor
        let LowCount = 0; //Low

        for(let index of rowss){
            const severity = (index['SEVERITY'] || '').toString();
            switch (severity) {
                case 'PREMIUM': preCount++;break;//PREMIUM
                case 'PREMIUM PREVENTIVE': prevCount++; break;//PREMIUM PREVENTIVE
                case 'CRITICAL': CritCount++; break;//CRITICAL
                case 'MAJOR': MajCount++; break;//MAJOR
            }if(severity === 'MINOR'&&Number(index['DURASI']) > 12)MinCount++; //MINOR
            // jika severity adalah MINOR maka durasi harus lebih dari 12 untuk dihitung
            else if(severity === 'LOW'&&Number(index['DURASI']) > 20)LowCount++; //LOW
            // jika severity adalah LOW maka durasi harus lebih dari 20 untuk dihitung
            console.log(MajCount);
        }
        //menampilkan data yang sudah di olah
        document.getElementById('PremiumValue').innerText = preCount;
        document.getElementById('PremiumPrevValue').innerText = prevCount;
        document.getElementById('CriticalValue').innerText = CritCount;
        document.getElementById('MajorValue').innerText = MajCount;
        document.getElementById('MinorValue').innerText = MinCount;
        document.getElementById('LowValue').innerText = LowCount;
            
        console.log("Hasil Hitung:", { preCount, CritCount, MajCount });
    };
    reader.readAsText(file);
}); 
//Fungsi klik pada floating box yang berfungsi untuk filter berdasarkan SEVERITY yang dipilih
function ClickBox(clickedBox){
    console.log("Click masuk dr ", clickedBox);
    let table = filterByColumn(rows, 'SEVERITY',clickedBox,'exact'); 
    //filter data berdasarkan severity yang dipilih
    if (table === null)console.warn("there is no data"); // jika data yang di filter tidak/kosong
    renderTableFromCSV(table, 'tableData', ['SEVERITY', 'INCIDENT', 'BRANCH', 'WORKZONE','TARGET','DURASI','SUMMARY','TOTAL TIKET']); 
}
