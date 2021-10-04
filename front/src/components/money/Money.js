// std ( standard, by default) [100.00USD]

// old (valoare veche, poate fi folosita pentru a arata eventual un pret cu reducere) - va aparea la fel doar ca TAIATA cu o LINIE pe mijloc

// act (active, adica, selectata sau evidentiata ) - va aparea cu un font mai evident, de exemplu - bold




const Money =({price:{ amount, currency}})=>{

return(
    <>{`${amount}${currency}`}</>
    // <>
    //     {(mode === 'std' && <>{`Price: ${amount}${currency}`}</>)
    //         ||
    //     (mode === 'old' && <>{`Price old: ${amount}${currency}`}</>)
    //     ||
    //     (mode === 'act' && <>{`Price act: ${amount}${currency}`}</>)}
    // </>
    );
}

export default Money
