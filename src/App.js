import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink
} from "react-router-dom";
import { Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import "./styles.css";
import C1 from "./components/C1";
import C2 from "./components/C2";
import C3 from "./components/C3";
import C4 from "./components/C4";
import C5 from "./components/C5";
import C6 from "./components/C6";
import C7 from "./components/C7";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2)
    }
  }
}));

export default function App() {
  const classes = useStyles();
  const [isShow, setIsShow] = useState(true);
  const toggle = () => setIsShow(!isShow);
  const [c3, setC3] = useState(0);
  const handleClickC3 = (value) => setC3(value);

  return (
    <div className="App">
      <Router>
        <div>
          <Typography className={classes.root}>
            <Link component={RouterLink} to="/">
              主页
            </Link>
            <Link component={RouterLink} to="/demo1">
              测试 1
            </Link>
            <Link component={RouterLink} to="/demo2">
              测试 2
            </Link>
            <Link component={RouterLink} to="/demo3">
              测试 3
            </Link>
            <Link component={RouterLink} to="/demo4">
              测试 4
            </Link>
            <Link component={RouterLink} to="/demo5">
              测试 5
            </Link>
            <Link component={RouterLink} to="/demo6">
              测试 6
            </Link>
            <Link component={RouterLink} to="/demo7">
              测试 7
            </Link>
          </Typography>
          <Switch>
            <Route path="/demo1">
              <h1>测试 1</h1>
              <h2>你可以在正在下载的时候，把下面的Component取消了。</h2>
              {isShow && <C1 />}
              <button onClick={toggle}>点我嘛</button>
            </Route>
            <Route path="/demo2">
              <h1>测试 2</h1>
              <h2>看看如何计数器能如何跳？</h2>
              <C2 />
            </Route>
            <Route path="/demo3">
              <h1>测试 3</h1>
              <h2>同步变化</h2>
              <C3 value={c3} handleClick={handleClickC3} />
              <C3 value={c3} handleClick={handleClickC3} />
            </Route>
            <Route path="/demo4">
              <h1>测试 4</h1>
              <h2>重复render with memo</h2>
              <C4 />
            </Route>
            <Route path="/demo5">
              <h1>测试 5</h1>
              <h2>render 两次,为什么呢？</h2>
              <C5 />
            </Route>
            <Route path="/demo6">
              <h1>测试 6</h1>
              <h2>useEffect理解</h2>
              <C6 />
            </Route>
            <Route path="/demo7">
              <h1>测试 7</h1>
              <h2>useState</h2>
              <C7 />
            </Route>
            <Route path="/">
              <h1>欢迎来到ReactJS学习群</h1>
              <p>你可以点击上面的链接来学习，每一个知识点！</p>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
