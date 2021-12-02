function moves(input) {
  return input.split("")
    .reduce((data, move, i) => {
        let t = i & 1;
        if (move === "^") data.y[t]--;
        if (move === ">") data.x[t]++;
        if (move === "v") data.y[t]++;
        if (move === "<") data.x[t]--;
        data.visited.add(data.x[t] + "," + data.y[t]);
        
        return data;
    }, {
        x: [ 0, 0 ],
        y: [ 0, 0 ],
        visited: new Set
    }).visited.size;
}

// 2639

// Now there's a robot moving with santa, so x and y are variables with two integers representing each deliver.

// When is santas turn we change de index for santa and when is robos turn we change x,y for robot.

// new Set keeps the same not allowing to be duplicated