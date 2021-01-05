<template>
<div class="container">
  <h1>Firefly Game</h1>
  
  
  <div v-if="player === '1'">
    

    <div v-if ="player === 'chatable'">
      <div v-if="ready">
        <h1>READY</h1>
        <div class="boxPosition">
          <div class="row">
            <div class="col-md-4 col-lg-6 offset-lg-3 offset-md-4">
              
              <h4>{{name}}</h4>          
              <h5>{{connectionCount}} Connected, {{online.length}} Online</h5>
              
              <p v-for="item in info" :key="item">
                <small>{{item.name}} {{item.type}}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    <div v-if="player === 'chat-box'">
      <div class="row">
        <div class="col">
          <form @submit.prevent="setName" class="mt-4">
            <div class="form-group row">
              <input type="text" class="form-control col" v-model="name" placeholder="Set Your Name First">
              <input type="submit" value="Add" class="btn btn-sm btn-info ml-1 col-2">
            </div>
          </form>
        </div>
      </div>
    </div>

    
    
    <div class="masterPosition">
      <div class="scrollDown">
        <h3>Scroll Down to use Game Cards</h3>
        <h3>Zoom Out to see Full Board</h3>
      </div>
      
      <div class="movingButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          <button class="btn btn-secondary btn-lg" v-on:click="move('keepPosition')">Add Piece</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move('left')">Left</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move('right')">Right</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move('up')">Up</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move('down')">Down</button>
          
        </div>
        <h3>Player Ship</h3>
      </div>

      <div class="allianceButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          <button class="btn btn-secondary btn-lg" v-on:click="move5('keepPosition5')">Add Piece</button>
   
            <button class="btn btn-secondary btn-lg" v-on:click="move5('left5')">Left</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move5('right5')">Right</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move5('up5')">Up</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move5('down5')">Down</button>
          
        </div>
        <h3>Alliance Base</h3>
      </div>

      <div class="cruiserButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          <button class="btn btn-secondary btn-lg" v-on:click="move7('keepPosition7')">Add Piece</button>
            
            <button class="btn btn-secondary btn-lg" v-on:click="move7('left7')">Left</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move7('right7')">Right</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move7('up7')">Up</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move7('down7')">Down</button>
          
        </div>
        <h3>Reaver Ship</h3>
      </div>

      <div class="reaverButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          
            <button class="btn btn-secondary btn-lg" v-on:click="move6('keepPosition6')">Add Piece</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('left6')">Left</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('right6')">Right</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('up6')">Up</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('down6')">Down</button>
          
        </div>
        <h3>Cruiser</h3>
      </div>
      
      
        <div class="playerNumber">
          <p>You Are Player {{player}}!</p>
        </div>

      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[1][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              <div class="rollDice">
                <p> {{ shipCards2[0]  }}</p>
              </div>

              <div class="diceBox">
                <img src="./dice_box.jpg"
                     height="100px"/>
              </div>

              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              <div>
                <button width="200px" class="diceButton btn btn-success btn-sm" @click="chosenShip2('rollDice')">Roll Dice</button>
              </div>

              <div class="drawJobLabel">
                <h2>Click on Job Card to Draw</h2>
              </div>
              
              <div class="drawJob1">
                <img v-bind:src="playerCards[20][0]"
                     v-on:click="giveManual('Player1DrawAmnonDuul')"
                     height="175px"/>
              </div>
              
              <div class="drawJob2">
                <img v-bind:src="playerCards[20][1]"
                     v-on:click="giveManual('Player1DrawBadger')"
                     height="175px"/>
              </div>
              
              <div class="drawJob3">
                <img v-bind:src="playerCards[20][2]"
                     v-on:click="giveManual('Player1DrawFantyMingo')"
                     height="175px"/>
              </div>
              
              <div class="drawJob4">
                <img v-bind:src="playerCards[20][3]"
                     v-on:click="giveManual('Player1DrawHarken')"
                     height="175px"/>
              </div>
              
              <div class="drawJob5">
                <img v-bind:src="playerCards[20][4]"
                     v-on:click="giveManual('Player1DrawHarrow')"
                     height="175px"/>
              </div>
              
              <div class="drawJob6">
                <img v-bind:src="playerCards[20][5]"
                     v-on:click="giveManual('Player1DrawHiggins')"
                     height="175px"/>
              </div>
              
              <div class="drawJob7">
                <img v-bind:src="playerCards[20][6]"
                     v-on:click="giveManual('Player1DrawNiska')"
                     height="175px"/>
              </div>
              
              <div class="drawJob8">
                <img v-bind:src="playerCards[20][7]"
                     v-on:click="giveManual('Player1DrawPatience')"
                     height="175px"/>
              </div>
              
              
              <div class="img1">
                <p v-if="shipInv[1][0][0][0]"> 
                  <img height="500px" :src="shipCards[1][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[1][0][0][0]"
                     v-on:click="supply('1box1')"
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[1][0][1][0]"
                     v-on:click="supply('1box2')"
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[1][0][2][0]"
                     v-on:click="supply('1box3')"
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[1][0][3][0]"
                     v-on:click="supply('1box4')"
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[1][0][4][0]"
                     v-on:click="supply('1box5')"
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[1][0][5][0]"
                     v-on:click="supply('1box6')"
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[1][0][6][0]"
                     v-on:click="supply('1box7')"
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[1][0][7][0]"
                     v-on:click="supply('1box8')"
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[1][0][8][0]"
                     v-on:click="supply('1box9')"
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[1][0][9][0]"
                     v-on:click="supply('1box10')"
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[1][0][10][0]"
                     v-on:click="supply('1box11')"
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[1][0][11][0]"
                     v-on:click="supply('1box12')"
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[0][5][2][0]"> 
                  <img height="175px" :src="playerCards[0][5][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="rotateJobs btn btn-success btn-sm"
                        @click="giveManual('finishedJobRotatePlayer1')">Next</button>
              </div>

              <div class="job1">
                <p v-if="playerCards[0][6][1][0]"> 
                  <img height="175px" :src="playerCards[0][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[0][6][1][0]"> 
                  <img height="175px" :src="playerCards[0][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[0][6][1][0]"> 
                  <img height="175px" :src="playerCards[0][6][3][0]" alt=""></p>
              </div>
              
              <div class="jobHidden1">
                <p v-if="playerCards[0][4][1][0]"> 
                  <img height="175px" :src="playerCards[0][4][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h1StartJob btn btn-success btn-sm" @click="giveManual('startJobP1C1')">Start Job</button>
              </div>

              <div>
                <button width="200px" class="p3h2StartJob btn btn-success btn-sm" @click="giveManual('startJobP1C2')">Start Job</button>
              </div>


              <div>
                <button width="200px" class="p3h3StartJob btn btn-success btn-sm" @click="giveManual('startJobP1C3')">Start Job</button>
              </div>

              <div>
                <button width="200px" class="p3h1JobComplete btn btn-success btn-sm" @click="giveManual('p1FinishedJobs1')">Complete</button>
              </div>
              

              <div>
                <button width="200px" class="p3h1DiscardJobStarted btn btn-danger btn-sm" @click="giveManual('p1DiscardJobsStarted1')">Discard</button>
              </div>


              <div>
                <button width="200px" class="p3h2DiscardJobStarted btn btn-danger btn-sm" @click="giveManual('p1DiscardJobsStarted2')">Discard</button>
              </div>


              <div>
                <button width="200px" class="p3h3DiscardJobStarted btn btn-danger btn-sm" @click="giveManual('p1DiscardJobsStarted3')">Discard</button>
              </div>
              
              
              <div>
                <button width="200px" class="p3h1DiscardJob btn btn-danger btn-sm" @click="giveManual('p1DiscardJobs1')">Discard</button>
              </div>
              
              <div class="jobHidden2">
                <p v-if="playerCards[0][4][1][0]"> 
                  <img height="175px" :src="playerCards[0][4][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h2JobComplete btn btn-success btn-sm" @click="giveManual('p1FinishedJobs2')">Complete</button>
              </div>
              
              
              <div>
                <button width="200px" class="p3h2DiscardJob btn btn-danger btn-sm" @click="giveManual('p1DiscardJobs2')">Discard</button>
              </div>
              
              <div class="jobHidden3">
                <p v-if="playerCards[0][4][1][0]"> 
                  <img height="175px" :src="playerCards[0][4][3][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h3JobComplete btn btn-success btn-sm" @click="giveManual('p1FinishedJobs3')">Complete</button>
              </div>
              
              
              <div>
                <button width="200px" class="p3h3DiscardJob btn btn-danger btn-sm" @click="giveManual('p1DiscardJobs3')">Discard</button>
              </div>
              
              
              
              
              
              <div class="p3h1">
                <p v-if="playerCards[0][0][1][0]">
                  <img height="350px" :src="playerCards[0][0][1][0]" alt="playerCards[0][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[0][0][0]"
                     v-on:click="chosenMood('p1c1ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[0][1][0]"
                     v-on:click="chosenMood('p1c2ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[0][2][0]"
                     v-on:click="chosenMood('p1c3ChangeMood')"
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[0][3][0]"
                     v-on:click="chosenMood('p1c4ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[0][4][0]"
                     v-on:click="chosenMood('p1c5ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[0][5][0]"
                     v-on:click="chosenMood('p1c6ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[0][6][0]"
                     v-on:click="chosenMood('p1c7ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[0][7][0]"
                     v-on:click="chosenMood('p1c8ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[0][8][0]"
                     v-on:click="chosenMood('p1c9ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[0][9][0]"
                     v-on:click="chosenMood('p1c10ChangeMood')"
                     height="45px"/>
              </div>
              
              <div class="p3h1Switch2">
                <button width="200px" class="3give1"  @click="giveManual('p1Switch1To2')">&#11138;</button>
              </div>

              <div class="p3priv1Switch2">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchPriv1To2')">&#11138;</button>
              </div>

              <div class="p3priv2Switch3">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchPriv2To3')">&#11138;</button>
              </div>

              <div class="p3priv3Switch4">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchPriv3To4')">&#11138;</button>
              </div>
              
              <div class="p3priv4Switch5">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchPriv4To5')">&#11138;</button>
              </div>

              <div class="p3priv5Switch6">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchPriv5To6')">&#11138;</button>
              </div>
              
              <div class="p3priv6Switch7">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchPriv6To7')">&#11138;</button>
              </div>

              <div class="p3priv7Switch8">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchPriv7To8')">&#11138;</button>
              </div>

              <div class="p3priv8Switch9">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchPriv8To9')">&#11138;</button>
              </div>

              <div class="p3priv9Switch10">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchPriv9To10')">&#11138;</button>
              </div>

              
              <div>
                <button width="200px" class="p3h1GiveP1Crew btn btn-success btn-sm"  @click="giveManual('p1CrewC1P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p1CrewC1P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p1CrewC1P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardCrew btn btn-danger btn-sm" @click="giveManual('p1DiscardCrew1')">Discard</button>
              </div>
              
              <div class="p3h2">
                <p v-if="playerCards[0][0][2][0]"> 
                  <img height="350px" :src="playerCards[0][0][2][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h2Switch3">
                <button width="200px" class="3give1"  @click="giveManual('p1Switch2To3')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP1Crew btn btn-success btn-sm"  @click="giveManual('p1CrewC2P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p1CrewC2P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p1CrewC2P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardCrew btn btn-danger btn-sm" @click="giveManual('p1DiscardCrew2')">Discard</button>
              </div>
              
              <div class="p3h3">
                <p v-if="playerCards[0][0][3][0]"> 
                  <img height="350px" :src="playerCards[0][0][3][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h3Switch4">
                <button width="200px" class="3give1"  @click="giveManual('p1Switch3To4')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP1Crew btn btn-success btn-sm"  @click="giveManual('p1CrewC3P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p1CrewC3P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p1CrewC3P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardCrew btn btn-danger btn-sm" @click="giveManual('p1DiscardCrew3')">Discard</button>
              </div>
              
              <div class="p3h4">
                <p v-if="playerCards[0][0][4][0]"> 
                  <img height="350px" :src="playerCards[0][0][4][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h4Switch5">
                <button width="200px" class="3give1"  @click="giveManual('p1Switch4To5')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP1Crew btn btn-success btn-sm"  @click="giveManual('p1CrewC4P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p1CrewC4P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p1CrewC4P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardCrew btn btn-danger btn-sm" @click="giveManual('p1DiscardCrew4')">Discard</button>
              </div>
              
              <div class="p3h5">
                <p v-if="playerCards[0][0][5][0]"> 
                  <img height="350px" :src="playerCards[0][0][5][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h5Switch6">
                <button width="200px" class="3give1"  @click="giveManual('p1Switch5To6')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP1Crew btn btn-success btn-sm"  @click="giveManual('p1CrewC5P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p1CrewC5P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p1CrewC5P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5DiscardCrew btn btn-danger btn-sm" @click="giveManual('p1DiscardCrew5')">Discard</button>
              </div>
              
              <div class="p3h6">
                <p v-if="playerCards[0][0][6][0]"> 
                  <img height="350px" :src="playerCards[0][0][6][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h6Switch7">
                <button width="200px" class="3give1"  @click="giveManual('p1Switch6To7')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP1Crew btn btn-success btn-sm"  @click="giveManual('p1CrewC6P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p1CrewC6P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p1CrewC6P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6DiscardCrew btn btn-danger btn-sm" @click="giveManual('p1DiscardCrew6')">Discard</button>
              </div>
              
              <div class="p3h7">
                <p v-if="playerCards[0][0][7][0]"> 
                  <img height="350px" :src="playerCards[0][0][7][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h7Switch8">
                <button width="200px" class="3give1"  @click="giveManual('p1Switch7To8')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP1Crew btn btn-success btn-sm"  @click="giveManual('p1CrewC7P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p1CrewC7P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p1CrewC7P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7DiscardCrew btn btn-danger btn-sm" @click="giveManual('p1DiscardCrew7')">Discard</button>
              </div>
              
              <div class="p3h8">
                <p v-if="playerCards[0][0][8][0]"> 
                  <img height="350px" :src="playerCards[0][0][8][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h8Switch9">
                <button width="200px" class="3give1"  @click="giveManual('p1Switch8To9')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP1Crew btn btn-success btn-sm"  @click="giveManual('p1CrewC8P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p1CrewC8P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p1CrewC8P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8DiscardCrew btn btn-danger btn-sm" @click="giveManual('p1DiscardCrew8')">Discard</button>
              </div>
              
              <div class="p3h9">
                <p v-if="playerCards[0][0][9][0]"> 
                  <img height="350px" :src="playerCards[0][0][9][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h9Switch10">
                <button width="200px" class="3give1"  @click="giveManual('p1Switch9To10')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP1Crew btn btn-success btn-sm"  @click="giveManual('p1CrewC9P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p1CrewC9P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p1CrewC9P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9DiscardCrew btn btn-danger btn-sm" @click="giveManual('p1DiscardCrew9')">Discard</button>
              </div>
              
              <div class="p3h10">
                <p v-if="playerCards[0][0][10][0]"> 
                  <img height="350px" :src="playerCards[0][0][10][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP1Crew btn btn-success btn-sm"  @click="giveManual('p1CrewC10P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p1CrewC10P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p1CrewC10P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10DiscardCrew btn btn-danger btn-sm" @click="giveManual('p1DiscardCrew10')">Discard</button>
              </div>
              
              <div class="p3pr1">
                <p v-if="playerCards[0][1][1][0]">
                  <img height="350px" :src="playerCards[0][1][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr1SwitchDown btn btn-info btn-sm" @click="giveManual('p1Priv1SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p1DiscardPrivate1')">Discard</button>
              </div>
              
              <div class="p3pr2">
                <p v-if="playerCards[0][1][2][0]">
                  <img height="350px" :src="playerCards[0][1][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr2SwitchDown btn btn-info btn-sm" @click="giveManual('p1Priv2SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p1DiscardPrivate2')">Discard</button>
              </div>
              
              <div class="p3pr3">
                <p v-if="playerCards[0][1][3][0]">
                  <img height="350px" :src="playerCards[0][1][3][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr3SwitchDown btn btn-info btn-sm" @click="giveManual('p1Priv3SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p1DiscardPrivate3')">Discard</button>
              </div>
              
              <div class="p3pr4">
                <p v-if="playerCards[0][1][4][0]">
                  <img height="350px" :src="playerCards[0][1][4][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr4SwitchDown btn btn-info btn-sm" @click="giveManual('p1Priv4SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p1DiscardPrivate4')">Discard</button>
              </div>
              
              <div class="p3pr5">
                <p v-if="playerCards[0][1][5][0]">
                  <img height="350px" :src="playerCards[0][1][5][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr5SwitchDown btn btn-info btn-sm" @click="giveManual('p1Priv5SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p1DiscardPrivate5')">Discard</button>
              </div>
              
              <div class="p3pr6">
                <p v-if="playerCards[0][1][6][0]">
                  <img height="350px" :src="playerCards[0][1][6][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr6SwitchDown btn btn-info btn-sm" @click="giveManual('p1Priv6SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p1DiscardPrivate6')">Discard</button>
              </div>
              
              <div class="p3pr7">
                <p v-if="playerCards[0][1][7][0]">
                  <img height="350px" :src="playerCards[0][1][7][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr7SwitchDown btn btn-info btn-sm" @click="giveManual('p1Priv7SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p1DiscardPrivate7')">Discard</button>
              </div>
              
              <div class="p3pr8">
                <p v-if="playerCards[0][1][8][0]">
                  <img height="350px" :src="playerCards[0][1][8][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr8SwitchDown btn btn-info btn-sm" @click="giveManual('p1Priv8SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p1DiscardPrivate8')">Discard</button>
              </div>
              
              <div class="p3pr9">
                <p v-if="playerCards[0][1][9][0]">
                  <img height="350px" :src="playerCards[0][1][9][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr9SwitchDown btn btn-info btn-sm" @click="giveManual('p1Priv9SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p1DiscardPrivate9')">Discard</button>
              </div>
              
              <div class="p3pr10">
                <p v-if="playerCards[0][1][10][0]">
                  <img height="350px" :src="playerCards[0][1][10][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr10SwitchDown btn btn-info btn-sm" @click="giveManual('p1Priv10SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p1DiscardPrivate10')">Discard</button>
              </div>
              
              <div class="p3i1">
                <p v-if="playerCards[0][2][1][0]">
                  <img height="350px" :src="playerCards[0][2][1][0]" alt=""></p>
              </div>
              
              <div class="p3i1Switch2">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchItems1To2')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP1Items btn btn-success btn-sm"  @click="giveManual('p1ItemsC1P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP2Items btn btn-light btn-sm"  @click="giveManual('p1ItemsC1P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p1ItemsC1P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardItems btn btn-danger btn-sm" @click="giveManual('p1DiscardItems1')">Discard</button>
              </div>
              
              <div class="p3i2">
                <p v-if="playerCards[0][2][2][0]">
                  <img height="350px" :src="playerCards[0][2][2][0]" alt=""></p>
              </div>
              
              <div class="p3i2Switch3">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchItems2To3')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP1Items btn btn-success btn-sm"  @click="giveManual('p1ItemsC2P2')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP2Items btn btn-light btn-sm"  @click="giveManual('p1ItemsC2P3')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p1ItemsC2P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardItems btn btn-danger btn-sm" @click="giveManual('p1DiscardItems2')">Discard</button>
              </div>
              
              <div class="p3i3">
                <p v-if="playerCards[0][2][3][0]">
                  <img height="350px" :src="playerCards[0][2][3][0]" alt=""></p>
              </div>
              
              <div class="p3i3Switch4">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchItems3To4')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP1Items btn btn-success btn-sm"  @click="giveManual('p1ItemsC3P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP2Items btn btn-light btn-sm"  @click="giveManual('p1ItemsC3P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p1ItemsC3P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardItems btn btn-danger btn-sm" @click="giveManual('p1DiscardItems3')">Discard</button>
              </div>
              
              <div class="p3i4">
                <p v-if="playerCards[0][2][4][0]">
                  <img height="350px" :src="playerCards[0][2][4][0]" alt=""></p>
              </div>
              
              <div class="p3i4Switch5">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchItems4To5')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP1Items btn btn-success btn-sm"  @click="giveManual('p1ItemsC4P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP2Items btn btn-light btn-sm"  @click="giveManual('p1ItemsC4P3')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p1ItemsC4P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardItems btn btn-danger btn-sm" @click="giveManual('p1DiscardItems4')">Discard</button>
              </div>
              
              <div class="p3i5">
                <p v-if="playerCards[0][2][5][0]">
                  <img height="350px" :src="playerCards[0][2][5][0]" alt=""></p>
              </div>
              
              <div class="p3i5Switch6">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchItems5To6')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP1Items btn btn-success btn-sm"  @click="giveManual('p1ItemsC5P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP2Items btn btn-light btn-sm"  @click="giveManual('p1ItemsC5P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p1ItemsC5P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5DiscardItems btn btn-danger btn-sm" @click="giveManual('p1DiscardItems5')">Discard</button>
              </div>
              
              <div class="p3i6">
                <p v-if="playerCards[0][2][6][0]">
                  <img height="350px" :src="playerCards[0][2][6][0]" alt=""></p>
              </div>
              
              <div class="p3i6Switch7">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchItems6To7')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP1Items btn btn-success btn-sm"  @click="giveManual('p1ItemsC6P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP2Items btn btn-light btn-sm"  @click="giveManual('p1ItemsC6P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p1ItemsC6P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6DiscardItems btn btn-danger btn-sm" @click="giveManual('p1DiscardItems6')">Discard</button>
              </div>
              
              <div class="p3i7">
                <p v-if="playerCards[0][2][7][0]">
                  <img height="350px" :src="playerCards[0][2][7][0]" alt=""></p>
              </div>
              
              <div class="p3i7Switch8">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchItems7To8')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px"
                        class="p3h7GiveP1Items btn btn-success btn-sm"
                        @click="giveManual('p1ItemsC7P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP2Items btn btn-light btn-sm"  @click="giveManual('p1ItemsC7P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p1ItemsC7P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7DiscardItems btn btn-danger btn-sm" @click="giveManual('p1DiscardItems7')">Discard</button>
              </div>
              
              <div class="p3i8">
                <p v-if="playerCards[0][2][8][0]">
                  <img height="350px" :src="playerCards[0][2][8][0]" alt=""></p>
              </div>
              
              <div class="p3i8Switch9">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchItems8To9')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP1Items btn btn-success btn-sm"  @click="giveManual('p1ItemsC8P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP2Items btn btn-light btn-sm"  @click="giveManual('p1ItemsC8P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p1ItemsC8P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8DiscardItems btn btn-danger btn-sm" @click="giveManual('p1DiscardItems8')">Discard</button>
              </div>
              
              <div class="p3i9">
                <p v-if="playerCards[0][2][9][0]">
                  <img height="350px" :src="playerCards[0][2][9][0]" alt=""></p>
              </div>
              
              <div class="p3i9Switch10">
                <button width="200px" class="3give1"  @click="giveManual('p1SwitchItems9To10')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP1Items btn btn-success btn-sm"  @click="giveManual('p1ItemsC9P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP2Items btn btn-light btn-sm"  @click="giveManual('p1ItemsC9P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p1ItemsC9P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9DiscardItems btn btn-danger btn-sm" @click="giveManual('p1DiscardItems9')">Discard</button>
              </div>
              
              <div class="p3i10">
                <p v-if="playerCards[0][2][10][0]">
                  <img height="350px" :src="playerCards[0][2][10][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP1Items btn btn-success btn-sm"  @click="giveManual('p1ItemsC10P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP2Items btn btn-light btn-sm"  @click="giveManual('p1ItemsC10P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p1ItemsC10P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10DiscardItems btn btn-danger btn-sm" @click="giveManual('p1DiscardItems10')">Discard</button>
              </div>
              
              <div class="p3su1">
                <p v-if="playerCards[0][7][1][0]">
                  <img height="350px" :src="playerCards[0][7][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p1DiscardUpgrades1')">Discard</button>
              </div>
              
              <div class="p3su2">
                <p v-if="playerCards[0][3][1][0]">
                  <img height="350px" :src="playerCards[0][3][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p1DiscardUpgrades2')">Discard</button>
              </div>
              
              <div class="p3su3">
                <p v-if="playerCards[0][3][2][0]">
                  <img height="350px" :src="playerCards[0][3][3][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p1DiscardUpgrades3')">Discard</button>
              </div>
              
              <div class="p3su4">
                <p v-if="playerCards[0][3][3][0]">
                  <img height="350px" :src="playerCards[0][3][4][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p1DiscardUpgrades4')">Discard</button>
              </div>
              
              <div class="shopSelect">
                <select class="form-control col" v-model="shop" label="Choose Shop">
                  <option value="null" disabled>Choose Shop</option>
                  <option value="1">Beaumonte</option>
                  <option value="2">Meridian</option>
                  <option value="3">Osiris Shipworks</option>
                  <option value="4">Persephone</option>
                  <option value="5">Regina</option>
                  <option value="6">Silverhold Munitions</option>
                  <option value="7">Space Bazaar</option>
                </select>
              </div>
              
              <div v-if="shop === '1'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[4][0][3][0]">
                    <img height="350px" :src="playerCards[4][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[4][0][1][1][0]">
                    <img height="350px" :src="playerCards[4][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px"
                          class="rotateBeaumondeDiscards btn btn-warning"
                          @click="giveManual('rotateBeaumondeDiscards')"
                          >Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawBeaumondeConsidered1Player1')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawBeaumondeConsidered2Player1')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawBeaumondeConsidered3Player1')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addBeaumondeShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addBeaumondeShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardBeaumondeShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardBeaumondeShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-btn btn-danger" @click="giveManual('discardBeaumondeShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[4][0][2][0][0]">
                    <img height="350px" :src="playerCards[4][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[4][0][2][1]">
                    <img height="350px" :src="playerCards[4][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[4][0][2][2]">
                    <img height="350px" :src="playerCards[4][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '2'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[5][0][3][0]">
                    <img height="350px" :src="playerCards[5][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[5][0][1][1][0]">
                    <img height="350px" :src="playerCards[5][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateMeridianDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawMeridianConsidered1Player1')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawMeridianConsidered2Player1')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawMeridianConsidered3Player1')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addMeridianShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addMeridianShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardMeridianShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardMeridianShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardMeridianShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[5][0][2][0][0]">
                    <img height="350px" :src="playerCards[5][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[5][0][2][1]">
                    <img height="350px" :src="playerCards[5][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[5][0][2][2]">
                    <img height="350px" :src="playerCards[5][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '3'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[6][0][3][0]">
                    <img height="350px" :src="playerCards[6][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[6][0][1][1][0]">
                    <img height="350px" :src="playerCards[6][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateOsirisShipworksDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawOsirisShipworksConsidered1Player1')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawOsirisShipworksConsidered2Player1')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawOsirisShipworksConsidered3Player1')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addOsirisShipworksShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addOsirisShipworksShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardOsirisShipworksShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardOsirisShipworksShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardOsirisShipworksShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[6][0][2][0][0]">
                    <img height="350px" :src="playerCards[6][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[6][0][2][1]">
                    <img height="350px" :src="playerCards[6][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[6][0][2][2]">
                    <img height="350px" :src="playerCards[6][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '4'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[7][0][3][0]">
                    <img height="350px" :src="playerCards[7][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[7][0][1][1][0]">
                    <img height="350px" :src="playerCards[7][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotatePersephoneDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawPersephoneConsidered1Player1')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawPersephoneConsidered2Player1')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawPersephoneConsidered3Player1')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addPersephoneShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addPersephoneShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardPersephoneShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardPersephoneShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardPersephoneShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[7][0][2][0][0]">
                    <img height="350px" :src="playerCards[7][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[7][0][2][1]">
                    <img height="350px" :src="playerCards[7][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[7][0][2][2]">
                    <img height="350px" :src="playerCards[7][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '5'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[8][0][3][0]">
                    <img height="350px" :src="playerCards[8][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[8][0][1][1][0]">
                    <img height="350px" :src="playerCards[8][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateReginaDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawReginaConsidered1Player1')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawReginaConsidered2Player1')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawReginaConsidered3Player1')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addReginaShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addReginaShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardReginaShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardReginaShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardReginaShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[8][0][2][0][0]">
                    <img height="350px" :src="playerCards[8][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[8][0][2][1]">
                    <img height="350px" :src="playerCards[8][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[8][0][2][2]">
                    <img height="350px" :src="playerCards[8][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '6'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[9][0][3][0]">
                    <img height="350px" :src="playerCards[9][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[9][0][1][1][0]">
                    <img height="350px" :src="playerCards[9][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateSilverholdMunitionsDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawSilverholdMunitionsConsidered1Player1')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawSilverholdMunitionsConsidered2Player1')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawSilverholdMunitionsConsidered3Player1')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addSilverholdMunitionsShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addSilverholdMunitionsShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardSilverholdMunitionsShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardSilverholdMunitionsShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardSilverholdMunitionsShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[9][0][2][0][0]">
                    <img height="350px" :src="playerCards[9][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[9][0][2][1]">
                    <img height="350px" :src="playerCards[9][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[9][0][2][2]">
                    <img height="350px" :src="playerCards[9][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '7'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[10][0][3][0]">
                    <img height="350px" :src="playerCards[10][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[10][0][1][1][0]">
                    <img height="350px" :src="playerCards[10][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateSpaceBazaarDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawSpaceBazaarConsidered1Player1')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawSpaceBazaarConsidered2Player1')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawSpaceBazaarConsidered3Player1')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addSpaceBazaarShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addSpaceBazaarShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardSpaceBazaarShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardSpaceBazaarShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardSpaceBazaarShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[10][0][2][0][0]">
                    <img height="350px" :src="playerCards[10][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[10][0][2][1]">
                    <img height="350px" :src="playerCards[10][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[10][0][2][2]">
                    <img height="350px" :src="playerCards[10][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div class="showAlliance">
                <p v-if="playerCards[21][1][1][0]">
                  <img height="350px" :src="playerCards[21][1][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawAlliance btn-lg btn-success" @click="giveManual('drawAlliance')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleAlliance btn-lg btn-danger" @click="giveManual('shuffleAlliance')">Shuffle</button> 
              </div>
              
              <div class="showBorder">
                <p v-if="playerCards[21][2][1][0]">
                  <img height="350px" :src="playerCards[21][2][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawBorder btn-lg btn-success" @click="giveManual('drawBorder')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleBorder btn-lg btn-danger" @click="giveManual('shuffleBorder')">Shuffle</button> 
              </div>

              <div class="showRim">
                <p v-if="playerCards[21][3][1][0]">
                  <img height="350px" :src="playerCards[21][3][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawRim btn-lg btn-success" @click="giveManual('drawRim')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleRim btn-lg btn-danger" @click="giveManual('shuffleRim')">Shuffle</button> 
              </div>

              <div class="showBounty">
                <p v-if="playerCards[21][4][1][0]">
                  <img height="350px" :src="playerCards[21][4][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawBounty btn-lg btn-success" @click="giveManual('drawBounty')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleBounty btn-lg btn-danger" @click="giveManual('shuffleBounty')">Shuffle</button> 
              </div>

              <div class="showMisbehave">
                <p v-if="playerCards[21][5][1][0]">
                  <img height="350px" :src="playerCards[21][5][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawMisbehave btn-lg btn-success" @click="giveManual('drawMisbehave')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleMisbehave btn-lg btn-danger" @click="giveManual('shuffleMisbehave')">Shuffle</button> 
              </div>

              <div class="showScenario">
                <p v-if="playerCards[23][0]">
                  <img height="1000px" :src="playerCards[23][0]" alt=""></p>
              </div>

              <div>
                <button width="200px" class="nextScenario btn-lg btn-success" @click="giveManual('nextScenario')">Next Scenario</button> 
              </div>
                
             

              <div class="moneyAmount">
                <p>Credits: {{ wallet1 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens1 }}</p>
              </div>

              <div class="goalTokensAdd">
                <div class="btn-group" role="group" aria-label="Basic example">
                  
                    <button class="btn-lg btn-success" @click="moveMoney1('goal1Add1')">+</button> 
                    <button class="btn-lg btn-danger" @click="moveMoney1('goal1Subtract1')">-</button> 
                  
                </div>
              </div>

              <div class="warrants">
                <p>Warrants: {{ warrant1 }}</p>
              </div>

              <div class="warrantsAdd">
                <div class="btn-group" role="group" aria-label="Basic example">
                  
                    <button class="btn-lg btn-success" @click="moveMoney1('warrant1Add1')">+</button> 
                    <button class="btn-lg btn-danger" @click="moveMoney1('warrant1Subtract1')">-</button> 
                  
                </div>
              </div>
              


              <div class="hundredCredits">
                <img v-bind:src="playerCards[22][0][0]"
                     v-on:click="moveMoney1('1add100')"
                     height="90px"/>
              </div>

              <div class="fiveHundred">
                <img v-bind:src="playerCards[22][1][0]"
                     v-on:click="moveMoney1('1add500')"
                     height="90px"/>
              </div>

              <div class="thousand">
                <img v-bind:src="playerCards[22][2][0]"
                     v-on:click="moveMoney1('1add1000')"
                     height="90px"/>
              </div>

              <div class="twoThousand">
                <img v-bind:src="playerCards[22][3][0]"
                     v-on:click="moveMoney1('1add2000')"
                     height="90px"/>
              </div>

              <div class="negativeHundredCredits">
                <img v-bind:src="playerCards[22][4][0]"
                     v-on:click="moveMoney1('1minus100')"
                     height="90px"/>
              </div>

              <div class="negativeFiveHundred">
                <img v-bind:src="playerCards[22][5][0]"
                     v-on:click="moveMoney1('1minus500')"
                     height="90px"/>
              </div>

              <div class="negativeThousand">
                <img v-bind:src="playerCards[22][6][0]"
                     v-on:click="moveMoney1('1minus1000')"
                     height="90px"/>
              </div>

              <div class="negativeTwoThousand">
                <img v-bind:src="playerCards[22][7][0]"
                     v-on:click="moveMoney1('1minus2000')"
                     height="90px"/>
              </div>
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>


    </div>  


    


    <div class="masterPositionPlayer1">
      <div class="playerLabel">
        <p>Player 2</p>
        </div>
      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[2][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              
              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              
              
              
              <div class="img1">
                <p v-if="shipInv[2][0][0][0]"> 
                  <img height="500px" :src="shipCards[2][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[2][0][0][0]"
                     
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[2][0][1][0]"
                     
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[2][0][2][0]"
                     
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[2][0][3][0]"
                     
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[2][0][4][0]"
                     
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[2][0][5][0]"
                     
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[2][0][6][0]"
                     
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[2][0][7][0]"
                     
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[2][0][8][0]"
                     
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[2][0][9][0]"
                     
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[2][0][10][0]"
                     
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[2][0][11][0]"
                     
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[1][5][2][0]"> 
                  <img height="175px" :src="playerCards[1][5][2][0]" alt=""></p>
              </div>
              
              
              <div class="job1">
                <p v-if="playerCards[1][6][1][0]"> 
                  <img height="175px" :src="playerCards[1][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[1][6][1][0]"> 
                  <img height="175px" :src="playerCards[1][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[1][6][1][0]"> 
                  <img height="175px" :src="playerCards[1][6][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3h1">
                <p v-if="playerCards[1][0][1][0]">
                  <img height="350px" :src="playerCards[1][0][1][0]" alt="playerCards[1][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[1][0][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[1][1][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[1][2][0]"
                     
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[1][3][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[1][4][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[1][5][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[1][6][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[1][7][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[1][8][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[1][9][0]"
                     
                     height="45px"/>
              </div>
              
              
              <div class="p3h2">
                <p v-if="playerCards[1][0][2][0]"> 
                  <img height="350px" :src="playerCards[1][0][2][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              
              <div class="p3h3">
                <p v-if="playerCards[1][0][3][0]"> 
                  <img height="350px" :src="playerCards[1][0][3][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h4">
                <p v-if="playerCards[1][0][4][0]"> 
                  <img height="350px" :src="playerCards[1][0][4][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h5">
                <p v-if="playerCards[1][0][5][0]"> 
                  <img height="350px" :src="playerCards[1][0][5][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h6">
                <p v-if="playerCards[1][0][6][0]"> 
                  <img height="350px" :src="playerCards[1][0][6][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h7">
                <p v-if="playerCards[1][0][7][0]"> 
                  <img height="350px" :src="playerCards[1][0][7][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h8">
                <p v-if="playerCards[1][0][8][0]"> 
                  <img height="350px" :src="playerCards[1][0][8][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h9">
                <p v-if="playerCards[1][0][9][0]"> 
                  <img height="350px" :src="playerCards[1][0][9][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h10">
                <p v-if="playerCards[1][0][10][0]"> 
                  <img height="350px" :src="playerCards[1][0][10][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              
              <div class="p3i1">
                <p v-if="playerCards[1][2][1][0]">
                  <img height="350px" :src="playerCards[1][2][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3i2">
                <p v-if="playerCards[1][2][2][0]">
                  <img height="350px" :src="playerCards[1][2][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3i3">
                <p v-if="playerCards[1][2][3][0]">
                  <img height="350px" :src="playerCards[1][2][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3i4">
                <p v-if="playerCards[1][2][4][0]">
                  <img height="350px" :src="playerCards[1][2][4][0]" alt=""></p>
              </div>
              
              
              <div class="p3i5">
                <p v-if="playerCards[1][2][5][0]">
                  <img height="350px" :src="playerCards[1][2][5][0]" alt=""></p>
              </div>
              
              
              <div class="p3i6">
                <p v-if="playerCards[1][2][6][0]">
                  <img height="350px" :src="playerCards[1][2][6][0]" alt=""></p>
              </div>
              
              
              <div class="p3i7">
                <p v-if="playerCards[1][2][7][0]">
                  <img height="350px" :src="playerCards[1][2][7][0]" alt=""></p>
              </div>
              
              
              <div class="p3i8">
                <p v-if="playerCards[1][2][8][0]">
                  <img height="350px" :src="playerCards[1][2][8][0]" alt=""></p>
              </div>
              
              
              <div class="p3i9">
                <p v-if="playerCards[1][2][9][0]">
                  <img height="350px" :src="playerCards[1][2][9][0]" alt=""></p>
              </div>
              
              
              <div class="p3i10">
                <p v-if="playerCards[1][2][10][0]">
                  <img height="350px" :src="playerCards[1][2][10][0]" alt=""></p>
              </div>
              
              
              <div class="p3su1">
                <p v-if="playerCards[1][7][1][0]">
                  <img height="350px" :src="playerCards[1][7][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3su2">
                <p v-if="playerCards[1][3][1][0]">
                  <img height="350px" :src="playerCards[1][3][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3su3">
                <p v-if="playerCards[1][3][2][0]">
                  <img height="350px" :src="playerCards[1][3][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3su4">
                <p v-if="playerCards[1][3][3][0]">
                  <img height="350px" :src="playerCards[1][3][4][0]" alt=""></p>
              </div>
              
              
              <div class="moneyAmount">
                <p>Credits: {{ wallet2 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens2 }}</p>
              </div>

              
              <div class="warrants">
                <p>Warrants: {{ warrant2 }}</p>
              </div>

              
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>


<div class="masterPositionPlayer2Altered">
      <div class="playerLabel">
        <p>Player 3</p>
        </div>
      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[3][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              
              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              
              
              
              <div class="img1">
                <p v-if="shipInv[1][0][0][0]"> 
                  <img height="500px" :src="shipCards[3][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[3][0][0][0]"
                     
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[3][0][1][0]"
                     
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[3][0][2][0]"
                     
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[3][0][3][0]"
                     
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[3][0][4][0]"
                     
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[3][0][5][0]"
                     
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[3][0][6][0]"
                     
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[3][0][7][0]"
                     
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[3][0][8][0]"
                     
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[3][0][9][0]"
                     
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[3][0][10][0]"
                     
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[3][0][11][0]"
                     
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[2][5][2][0]"> 
                  <img height="175px" :src="playerCards[2][5][2][0]" alt=""></p>
              </div>
              
              
              <div class="job1">
                <p v-if="playerCards[2][6][1][0]"> 
                  <img height="175px" :src="playerCards[2][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[2][6][1][0]"> 
                  <img height="175px" :src="playerCards[2][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[2][6][1][0]"> 
                  <img height="175px" :src="playerCards[2][6][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3h1">
                <p v-if="playerCards[2][0][1][0]">
                  <img height="350px" :src="playerCards[2][0][1][0]" alt="playerCards[2][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[2][0][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[2][1][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[2][2][0]"
                     
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[2][3][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[2][4][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[2][5][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[2][6][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[2][7][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[2][8][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[2][9][0]"
                     
                     height="45px"/>
              </div>
              
              
              <div class="p3h2">
                <p v-if="playerCards[2][0][2][0]"> 
                  <img height="350px" :src="playerCards[2][0][2][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              
              <div class="p3h3">
                <p v-if="playerCards[2][0][3][0]"> 
                  <img height="350px" :src="playerCards[2][0][3][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h4">
                <p v-if="playerCards[2][0][4][0]"> 
                  <img height="350px" :src="playerCards[2][0][4][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h5">
                <p v-if="playerCards[2][0][5][0]"> 
                  <img height="350px" :src="playerCards[2][0][5][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h6">
                <p v-if="playerCards[2][0][6][0]"> 
                  <img height="350px" :src="playerCards[2][0][6][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h7">
                <p v-if="playerCards[2][0][7][0]"> 
                  <img height="350px" :src="playerCards[2][0][7][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h8">
                <p v-if="playerCards[2][0][8][0]"> 
                  <img height="350px" :src="playerCards[2][0][8][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h9">
                <p v-if="playerCards[2][0][9][0]"> 
                  <img height="350px" :src="playerCards[2][0][9][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h10">
                <p v-if="playerCards[2][0][10][0]"> 
                  <img height="350px" :src="playerCards[2][0][10][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              
              <div class="p3i1">
                <p v-if="playerCards[2][2][1][0]">
                  <img height="350px" :src="playerCards[2][2][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3i2">
                <p v-if="playerCards[2][2][2][0]">
                  <img height="350px" :src="playerCards[2][2][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3i3">
                <p v-if="playerCards[2][2][3][0]">
                  <img height="350px" :src="playerCards[2][2][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3i4">
                <p v-if="playerCards[2][2][4][0]">
                  <img height="350px" :src="playerCards[2][2][4][0]" alt=""></p>
              </div>
              
              
              <div class="p3i5">
                <p v-if="playerCards[2][2][5][0]">
                  <img height="350px" :src="playerCards[2][2][5][0]" alt=""></p>
              </div>
              
              
              <div class="p3i6">
                <p v-if="playerCards[2][2][6][0]">
                  <img height="350px" :src="playerCards[2][2][6][0]" alt=""></p>
              </div>
              
              
              <div class="p3i7">
                <p v-if="playerCards[2][2][7][0]">
                  <img height="350px" :src="playerCards[2][2][7][0]" alt=""></p>
              </div>
              
              
              <div class="p3i8">
                <p v-if="playerCards[2][2][8][0]">
                  <img height="350px" :src="playerCards[2][2][8][0]" alt=""></p>
              </div>
              
              
              <div class="p3i9">
                <p v-if="playerCards[2][2][9][0]">
                  <img height="350px" :src="playerCards[2][2][9][0]" alt=""></p>
              </div>
              
              
              <div class="p3i10">
                <p v-if="playerCards[2][2][10][0]">
                  <img height="350px" :src="playerCards[2][2][10][0]" alt=""></p>
              </div>
              
              
              <div class="p3su1">
                <p v-if="playerCards[2][7][1][0]">
                  <img height="350px" :src="playerCards[2][7][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3su2">
                <p v-if="playerCards[2][3][1][0]">
                  <img height="350px" :src="playerCards[2][3][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3su3">
                <p v-if="playerCards[2][3][2][0]">
                  <img height="350px" :src="playerCards[2][3][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3su4">
                <p v-if="playerCards[2][3][3][0]">
                  <img height="350px" :src="playerCards[2][3][4][0]" alt=""></p>
              </div>
              
              
              <div class="moneyAmount">
                <p>Credits: {{ wallet3 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens3 }}</p>
              </div>

              
              <div class="warrants">
                <p>Warrants: {{ warrant3 }}</p>
              </div>

              
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>


    </div>  
      
      
    </div>  


    <div class="masterPositionPlayer3Altered">
      <div class="playerLabel">
        <p>Player 4</p>
        </div>
      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[4][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              
              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              
              
              
          <div class="img1">  
                <p v-if="shipInv[4][0][0][0]"> 
                  <img height="500px" :src="shipCards[4][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[4][0][0][0]"
                     
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[4][0][1][0]"
                     
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[4][0][2][0]"
                     
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[4][0][3][0]"
                     
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[4][0][4][0]"
                     
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[4][0][5][0]"
                     
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[4][0][6][0]"
                     
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[4][0][7][0]"
                     
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[4][0][8][0]"
                     
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[4][0][9][0]"
                     
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[4][0][10][0]"
                     
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[4][0][11][0]"
                     
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[3][5][2][0]"> 
                  <img height="175px" :src="playerCards[3][5][2][0]" alt=""></p>
              </div>
              
              
              <div class="job1">
                <p v-if="playerCards[3][6][1][0]"> 
                  <img height="175px" :src="playerCards[3][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[3][6][1][0]"> 
                  <img height="175px" :src="playerCards[3][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[3][6][1][0]"> 
                  <img height="175px" :src="playerCards[3][6][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3h1">
                <p v-if="playerCards[3][0][1][0]">
                  <img height="350px" :src="playerCards[3][0][1][0]" alt="playerCards[3][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[3][0][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[3][1][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[3][2][0]"
                     
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[3][3][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[3][4][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[3][5][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[3][6][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[3][7][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[3][8][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[3][9][0]"
                     
                     height="45px"/>
              </div>
              
              
              <div class="p3h2">
                <p v-if="playerCards[3][0][2][0]"> 
                  <img height="350px" :src="playerCards[3][0][2][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              
              <div class="p3h3">
                <p v-if="playerCards[3][0][3][0]"> 
                  <img height="350px" :src="playerCards[3][0][3][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h4">
                <p v-if="playerCards[3][0][4][0]"> 
                  <img height="350px" :src="playerCards[3][0][4][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h5">
                <p v-if="playerCards[3][0][5][0]"> 
                  <img height="350px" :src="playerCards[3][0][5][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h6">
                <p v-if="playerCards[3][0][6][0]"> 
                  <img height="350px" :src="playerCards[3][0][6][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h7">
                <p v-if="playerCards[3][0][7][0]"> 
                  <img height="350px" :src="playerCards[3][0][7][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h8">
                <p v-if="playerCards[3][0][8][0]"> 
                  <img height="350px" :src="playerCards[3][0][8][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h9">
                <p v-if="playerCards[3][0][9][0]"> 
                  <img height="350px" :src="playerCards[3][0][9][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h10">
                <p v-if="playerCards[3][0][10][0]"> 
                  <img height="350px" :src="playerCards[3][0][10][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              
              <div class="p3i1">
                <p v-if="playerCards[3][2][1][0]">
                  <img height="350px" :src="playerCards[3][2][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3i2">
                <p v-if="playerCards[3][2][2][0]">
                  <img height="350px" :src="playerCards[3][2][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3i3">
                <p v-if="playerCards[3][2][3][0]">
                  <img height="350px" :src="playerCards[3][2][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3i4">
                <p v-if="playerCards[3][2][4][0]">
                  <img height="350px" :src="playerCards[3][2][4][0]" alt=""></p>
              </div>
              
              
              <div class="p3i5">
                <p v-if="playerCards[3][2][5][0]">
                  <img height="350px" :src="playerCards[3][2][5][0]" alt=""></p>
              </div>
              
              
              <div class="p3i6">
                <p v-if="playerCards[3][2][6][0]">
                  <img height="350px" :src="playerCards[3][2][6][0]" alt=""></p>
              </div>
              
              
              <div class="p3i7">
                <p v-if="playerCards[3][2][7][0]">
                  <img height="350px" :src="playerCards[3][2][7][0]" alt=""></p>
              </div>
              
              
              <div class="p3i8">
                <p v-if="playerCards[3][2][8][0]">
                  <img height="350px" :src="playerCards[3][2][8][0]" alt=""></p>
              </div>
              
              
              <div class="p3i9">
                <p v-if="playerCards[3][2][9][0]">
                  <img height="350px" :src="playerCards[3][2][9][0]" alt=""></p>
              </div>
              
              
              <div class="p3i10">
                <p v-if="playerCards[3][2][10][0]">
                  <img height="350px" :src="playerCards[3][2][10][0]" alt=""></p>
              </div>
              
              
              <div class="p3su1">
                <p v-if="playerCards[3][7][1][0]">
                  <img height="350px" :src="playerCards[3][7][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3su2">
                <p v-if="playerCards[3][3][1][0]">
                  <img height="350px" :src="playerCards[3][3][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3su3">
                <p v-if="playerCards[3][3][2][0]">
                  <img height="350px" :src="playerCards[3][3][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3su4">
                <p v-if="playerCards[3][3][3][0]">
                  <img height="350px" :src="playerCards[3][3][4][0]" alt=""></p>
              </div>
              
              
              <div class="moneyAmount">
                <p>Credits: {{ wallet4 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens4 }}</p>
              </div>

              
              <div class="warrants">
                <p>Warrants: {{ warrant4 }}</p>
              </div>

              
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>


    </div>

    
  </div>
  
  <div v-else-if="player === '2'">


        <div v-if ="player === 'chatable'">
      <div v-if="ready">
        <h1>READY</h1>
        <div class="boxPosition">
          <div class="row">
            <div class="col-md-4 col-lg-6 offset-lg-3 offset-md-4">
              
              <h4>{{name}}</h4>          
              <h5>{{connectionCount}} Connected, {{online.length}} Online</h5>
              
              <p v-for="item in info" :key="item">
                <small>{{item.name}} {{item.type}}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    <div v-if="player === 'chat-box'">
      <div class="row">
        <div class="col">
          <form @submit.prevent="setName" class="mt-4">
            <div class="form-group row">
              <input type="text" class="form-control col" v-model="name" placeholder="Set Your Name First">
              <input type="submit" value="Add" class="btn btn-sm btn-info ml-1 col-2">
            </div>
          </form>
        </div>
      </div>
    </div>

    
    
    <div class="masterPosition">
      <div class="scrollDown">
        <h3>Scroll Down to use Game Cards</h3>
        <h3>Zoom Out to see Full Board</h3>
      </div>
      
      <div class="movingButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          
          <button class="btn btn-secondary btn-lg" v-on:click="move2('keepPosition2')">Add Piece</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move2('left2')">Left</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move2('right2')">Right</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move2('up2')">Up</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move2('down2')">Down</button>
          
          
        </div>
        <h3>Player Ship</h3>
      </div>

      <div class="allianceButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          <button class="btn btn-secondary btn-lg" v-on:click="move5('keepPosition5')">Add Piece</button>
   
            <button class="btn btn-secondary btn-lg" v-on:click="move5('left5')">Left</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move5('right5')">Right</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move5('up5')">Up</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move5('down5')">Down</button>
          
        </div>
        <h3>Alliance Base</h3>
      </div>

      <div class="cruiserButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          <button class="btn btn-secondary btn-lg" v-on:click="move7('keepPosition7')">Add Piece</button>
            
            <button class="btn btn-secondary btn-lg" v-on:click="move7('left7')">Left</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move7('right7')">Right</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move7('up7')">Up</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move7('down7')">Down</button>
          
        </div>
        <h3>Reaver Ship</h3>
      </div>

      <div class="reaverButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          
            <button class="btn btn-secondary btn-lg" v-on:click="move6('keepPosition6')">Add Piece</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('left6')">Left</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('right6')">Right</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('up6')">Up</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('down6')">Down</button>
          
        </div>
        <h3>Cruiser</h3>
      </div>
      
      
        <div class="playerNumber">
          <p>You Are Player {{player}}!</p>
        </div>

      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[2][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              <div class="rollDice">
                <p> {{ shipCards2[0]  }}</p>
              </div>

              <div class="diceBox">
                <img src="./dice_box.jpg"
                     height="100px"/>
              </div>

              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              <div>
                <button width="200px" class="diceButton btn btn-success btn-sm" @click="chosenShip2('rollDice')">Roll Dice</button>
              </div>

              <div class="drawJobLabel">
                <h2>Click on Job Card to Draw</h2>
              </div>
              
              <div class="drawJob1">
                <img v-bind:src="playerCards[20][0]"
                     v-on:click="giveManual('Player2DrawAmnonDuul')"
                     height="175px"/>
              </div>
              
              <div class="drawJob2">
                <img v-bind:src="playerCards[20][1]"
                     v-on:click="giveManual('Player2DrawBadger')"
                     height="175px"/>
              </div>
              
              <div class="drawJob3">
                <img v-bind:src="playerCards[20][2]"
                     v-on:click="giveManual('Player2DrawFantyMingo')"
                     height="175px"/>
              </div>
              
              <div class="drawJob4">
                <img v-bind:src="playerCards[20][3]"
                     v-on:click="giveManual('Player2DrawHarken')"
                     height="175px"/>
              </div>
              
              <div class="drawJob5">
                <img v-bind:src="playerCards[20][4]"
                     v-on:click="giveManual('Player2DrawHarrow')"
                     height="175px"/>
              </div>
              
              <div class="drawJob6">
                <img v-bind:src="playerCards[20][5]"
                     v-on:click="giveManual('Player2DrawHiggins')"
                     height="175px"/>
              </div>
              
              <div class="drawJob7">
                <img v-bind:src="playerCards[20][6]"
                     v-on:click="giveManual('Player2DrawNiska')"
                     height="175px"/>
              </div>
              
              <div class="drawJob8">
                <img v-bind:src="playerCards[20][7]"
                     v-on:click="giveManual('Player2DrawPatience')"
                     height="175px"/>
              </div>
              
          
              
    <div class="img1">
                <p v-if="shipInv[2][0][0][0]"> 
                  <img height="500px" :src="shipCards[2][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[2][0][0][0]"
                     v-on:click="supply('2box1')"
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[2][0][1][0]"
                     v-on:click="supply('2box2')"
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[2][0][2][0]"
                     v-on:click="supply('2box3')"
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[2][0][3][0]"
                     v-on:click="supply('2box4')"
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[2][0][4][0]"
                     v-on:click="supply('2box5')"
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[2][0][5][0]"
                     v-on:click="supply('2box6')"
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[2][0][6][0]"
                     v-on:click="supply('2box7')"
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[2][0][7][0]"
                     v-on:click="supply('2box8')"
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[2][0][8][0]"
                     v-on:click="supply('2box9')"
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[2][0][9][0]"
                     v-on:click="supply('2box10')"
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[2][0][10][0]"
                     v-on:click="supply('2box11')"
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[2][0][11][0]"
                     v-on:click="supply('2box12')"
                     height="88px"/>
              </div>
              
          <div class="finishedJobs">
                <p v-if="playerCards[1][5][2][0]"> 
                  <img height="175px" :src="playerCards[1][5][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="rotateJobs btn btn-success btn-sm"
                        @click="giveManual('finishedJobRotatePlayer2')">Next</button>
              </div>

              <div class="job1">
                <p v-if="playerCards[1][6][1][0]"> 
                  <img height="175px" :src="playerCards[1][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[1][6][1][0]"> 
                  <img height="175px" :src="playerCards[1][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[1][6][1][0]"> 
                  <img height="175px" :src="playerCards[1][6][3][0]" alt=""></p>
              </div>
              
              <div class="jobHidden1">
                <p v-if="playerCards[1][4][1][0]"> 
                  <img height="175px" :src="playerCards[1][4][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h1StartJob btn btn-success btn-sm" @click="giveManual('startJobP2C1')">Start Job</button>
              </div>

              <div>
                <button width="200px" class="p3h2StartJob btn btn-success btn-sm" @click="giveManual('startJobP2C2')">Start Job</button>
              </div>


              <div>
                <button width="200px" class="p3h3StartJob btn btn-success btn-sm" @click="giveManual('startJobP2C3')">Start Job</button>
              </div>

              <div>
                <button width="200px" class="p3h1JobComplete btn btn-success btn-sm" @click="giveManual('p2FinishedJobs1')">Complete</button>
              </div>
              

              <div>
                <button width="200px" class="p3h1DiscardJobStarted btn btn-danger btn-sm" @click="giveManual('p2DiscardJobsStarted1')">Discard</button>
              </div>


              <div>
                <button width="200px" class="p3h2DiscardJobStarted btn btn-danger btn-sm" @click="giveManual('p2DiscardJobsStarted2')">Discard</button>
              </div>


              <div>
                <button width="200px" class="p3h3DiscardJobStarted btn btn-danger btn-sm" @click="giveManual('p2DiscardJobsStarted3')">Discard</button>
              </div>
              
              
              <div>
                <button width="200px" class="p3h1DiscardJob btn btn-danger btn-sm" @click="giveManual('p2DiscardJobs1')">Discard</button>
              </div>
              
              <div class="jobHidden2">
                <p v-if="playerCards[1][4][1][0]"> 
                  <img height="175px" :src="playerCards[1][4][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h2JobComplete btn btn-success btn-sm" @click="giveManual('p2FinishedJobs2')">Complete</button>
              </div>
              
              
              <div>
                <button width="200px" class="p3h2DiscardJob btn btn-danger btn-sm" @click="giveManual('p2DiscardJobs2')">Discard</button>
              </div>
              
              <div class="jobHidden3">
                <p v-if="playerCards[1][4][1][0]"> 
                  <img height="175px" :src="playerCards[1][4][3][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h3JobComplete btn btn-success btn-sm" @click="giveManual('p2FinishedJobs3')">Complete</button>
              </div>
              
              
              <div>
                <button width="200px" class="p3h3DiscardJob btn btn-danger btn-sm" @click="giveManual('p2DiscardJobs3')">Discard</button>
              </div>
              
              
              
              
              
              <div class="p3h1">
                <p v-if="playerCards[1][0][1][0]">
                  <img height="350px" :src="playerCards[1][0][1][0]" alt="playerCards[1][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[1][0][0]"
                     v-on:click="chosenMood('p2c1ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[1][1][0]"
                     v-on:click="chosenMood('p2c2ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[1][2][0]"
                     v-on:click="chosenMood('p2c3ChangeMood')"
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[1][3][0]"
                     v-on:click="chosenMood('p2c4ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[1][4][0]"
                     v-on:click="chosenMood('p2c5ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[1][5][0]"
                     v-on:click="chosenMood('p2c6ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[1][6][0]"
                     v-on:click="chosenMood('p2c7ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[1][7][0]"
                     v-on:click="chosenMood('p2c8ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[1][8][0]"
                     v-on:click="chosenMood('p2c9ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[1][9][0]"
                     v-on:click="chosenMood('p2c10ChangeMood')"
                     height="45px"/>
              </div>
              
              <div class="p3h1Switch2">
                <button width="200px" class="3give1"  @click="giveManual('p2Switch1To2')">&#11138;</button>
              </div>

              <div class="p3priv1Switch2">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchPriv1To2')">&#11138;</button>
              </div>

              <div class="p3priv2Switch3">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchPriv2To3')">&#11138;</button>
              </div>

              <div class="p3priv3Switch4">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchPriv3To4')">&#11138;</button>
              </div>
              
              <div class="p3priv4Switch5">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchPriv4To5')">&#11138;</button>
              </div>

              <div class="p3priv5Switch6">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchPriv5To6')">&#11138;</button>
              </div>
              
              <div class="p3priv6Switch7">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchPriv6To7')">&#11138;</button>
              </div>

              <div class="p3priv7Switch8">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchPriv7To8')">&#11138;</button>
              </div>

              <div class="p3priv8Switch9">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchPriv8To9')">&#11138;</button>
              </div>

              <div class="p3priv9Switch10">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchPriv9To10')">&#11138;</button>
              </div>

              
              <div>
                <button width="200px" class="p3h1GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p2CrewC1P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p2CrewC1P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p2CrewC1P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardCrew btn btn-danger btn-sm" @click="giveManual('p2DiscardCrew1')">Discard</button>
              </div>
              
              <div class="p3h2">
                <p v-if="playerCards[1][0][2][0]"> 
                  <img height="350px" :src="playerCards[1][0][2][0]" alt="playerCards[1][0]"></p>
              </div>
              
              <div class="p3h2Switch3">
                <button width="200px" class="3give1"  @click="giveManual('p2Switch2To3')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p2CrewC2P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p2CrewC2P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p2CrewC2P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardCrew btn btn-danger btn-sm" @click="giveManual('p2DiscardCrew2')">Discard</button>
              </div>
              
              <div class="p3h3">
                <p v-if="playerCards[1][0][3][0]"> 
                  <img height="350px" :src="playerCards[1][0][3][0]" alt="playerCards[1][0]"></p>
              </div>
              
              <div class="p3h3Switch4">
                <button width="200px" class="3give1"  @click="giveManual('p2Switch3To4')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p2CrewC3P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p2CrewC3P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p2CrewC3P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardCrew btn btn-danger btn-sm" @click="giveManual('p2DiscardCrew3')">Discard</button>
              </div>
              
              <div class="p3h4">
                <p v-if="playerCards[1][0][4][0]"> 
                  <img height="350px" :src="playerCards[1][0][4][0]" alt="playerCards[1][0]"></p>
              </div>
              
              <div class="p3h4Switch5">
                <button width="200px" class="3give1"  @click="giveManual('p2Switch4To5')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p2CrewC4P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p2CrewC4P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p2CrewC4P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardCrew btn btn-danger btn-sm" @click="giveManual('p2DiscardCrew4')">Discard</button>
              </div>
              
              <div class="p3h5">
                <p v-if="playerCards[1][0][5][0]"> 
                  <img height="350px" :src="playerCards[1][0][5][0]" alt="playerCards[1][0]"></p>
              </div>
              
              <div class="p3h5Switch6">
                <button width="200px" class="3give1"  @click="giveManual('p2Switch5To6')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p2CrewC5P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p2CrewC5P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p2CrewC5P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5DiscardCrew btn btn-danger btn-sm" @click="giveManual('p2DiscardCrew5')">Discard</button>
              </div>
              
              <div class="p3h6">
                <p v-if="playerCards[1][0][6][0]"> 
                  <img height="350px" :src="playerCards[1][0][6][0]" alt="playerCards[1][0]"></p>
              </div>
              
              <div class="p3h6Switch7">
                <button width="200px" class="3give1"  @click="giveManual('p2Switch6To7')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p2CrewC6P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p2CrewC6P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p2CrewC6P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6DiscardCrew btn btn-danger btn-sm" @click="giveManual('p2DiscardCrew6')">Discard</button>
              </div>
              
              <div class="p3h7">
                <p v-if="playerCards[1][0][7][0]"> 
                  <img height="350px" :src="playerCards[1][0][7][0]" alt="playerCards[1][0]"></p>
              </div>
              
              <div class="p3h7Switch8">
                <button width="200px" class="3give1"  @click="giveManual('p2Switch7To8')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p2CrewC7P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p2CrewC7P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p2CrewC7P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7DiscardCrew btn btn-danger btn-sm" @click="giveManual('p2DiscardCrew7')">Discard</button>
              </div>
              
              <div class="p3h8">
                <p v-if="playerCards[1][0][8][0]"> 
                  <img height="350px" :src="playerCards[1][0][8][0]" alt="playerCards[1][0]"></p>
              </div>
              
              <div class="p3h8Switch9">
                <button width="200px" class="3give1"  @click="giveManual('p2Switch8To9')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p2CrewC8P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p2CrewC8P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p2CrewC8P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8DiscardCrew btn btn-danger btn-sm" @click="giveManual('p2DiscardCrew8')">Discard</button>
              </div>
              
              <div class="p3h9">
                <p v-if="playerCards[1][0][9][0]"> 
                  <img height="350px" :src="playerCards[1][0][9][0]" alt="playerCards[1][0]"></p>
              </div>
              
              <div class="p3h9Switch10">
                <button width="200px" class="3give1"  @click="giveManual('p2Switch9To10')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p2CrewC9P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p2CrewC9P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p2CrewC9P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9DiscardCrew btn btn-danger btn-sm" @click="giveManual('p2DiscardCrew9')">Discard</button>
              </div>
              
              <div class="p3h10">
                <p v-if="playerCards[1][0][10][0]"> 
                  <img height="350px" :src="playerCards[1][0][10][0]" alt="playerCards[1][0]"></p>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p2CrewC10P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP2Crew btn btn-light btn-sm"  @click="giveManual('p2CrewC10P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p2CrewC10P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10DiscardCrew btn btn-danger btn-sm" @click="giveManual('p2DiscardCrew10')">Discard</button>
              </div>
              
              <div class="p3pr1">
                <p v-if="playerCards[1][1][1][0]">
                  <img height="350px" :src="playerCards[1][1][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr1SwitchDown btn btn-info btn-sm" @click="giveManual('p2Priv1SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p2DiscardPrivate1')">Discard</button>
              </div>
              
              <div class="p3pr2">
                <p v-if="playerCards[1][1][2][0]">
                  <img height="350px" :src="playerCards[1][1][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr2SwitchDown btn btn-info btn-sm" @click="giveManual('p2Priv2SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p2DiscardPrivate2')">Discard</button>
              </div>
              
              <div class="p3pr3">
                <p v-if="playerCards[1][1][3][0]">
                  <img height="350px" :src="playerCards[1][1][3][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr3SwitchDown btn btn-info btn-sm" @click="giveManual('p2Priv3SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p2DiscardPrivate3')">Discard</button>
              </div>
              
              <div class="p3pr4">
                <p v-if="playerCards[1][1][4][0]">
                  <img height="350px" :src="playerCards[1][1][4][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr4SwitchDown btn btn-info btn-sm" @click="giveManual('p2Priv4SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p2DiscardPrivate4')">Discard</button>
              </div>
              
              <div class="p3pr5">
                <p v-if="playerCards[1][1][5][0]">
                  <img height="350px" :src="playerCards[1][1][5][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr5SwitchDown btn btn-info btn-sm" @click="giveManual('p2Priv5SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p2DiscardPrivate5')">Discard</button>
              </div>
              
              <div class="p3pr6">
                <p v-if="playerCards[1][1][6][0]">
                  <img height="350px" :src="playerCards[1][1][6][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr6SwitchDown btn btn-info btn-sm" @click="giveManual('p2Priv6SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p2DiscardPrivate6')">Discard</button>
              </div>
              
              <div class="p3pr7">
                <p v-if="playerCards[1][1][7][0]">
                  <img height="350px" :src="playerCards[1][1][7][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr7SwitchDown btn btn-info btn-sm" @click="giveManual('p2Priv7SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p2DiscardPrivate7')">Discard</button>
              </div>
              
              <div class="p3pr8">
                <p v-if="playerCards[1][1][8][0]">
                  <img height="350px" :src="playerCards[1][1][8][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr8SwitchDown btn btn-info btn-sm" @click="giveManual('p2Priv8SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p2DiscardPrivate8')">Discard</button>
              </div>
              
              <div class="p3pr9">
                <p v-if="playerCards[1][1][9][0]">
                  <img height="350px" :src="playerCards[1][1][9][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr9SwitchDown btn btn-info btn-sm" @click="giveManual('p2Priv9SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p2DiscardPrivate9')">Discard</button>
              </div>
              
              <div class="p3pr10">
                <p v-if="playerCards[1][1][10][0]">
                  <img height="350px" :src="playerCards[1][1][10][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr10SwitchDown btn btn-info btn-sm" @click="giveManual('p2Priv10SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p2DiscardPrivate10')">Discard</button>
              </div>
              
              <div class="p3i1">
                <p v-if="playerCards[1][2][1][0]">
                  <img height="350px" :src="playerCards[1][2][1][0]" alt=""></p>
              </div>
              
              <div class="p3i1Switch2">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchItems1To2')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p2ItemsC1P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP2Items btn btn-light btn-sm"  @click="giveManual('p2ItemsC1P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p2ItemsC1P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardItems btn btn-danger btn-sm" @click="giveManual('p2DiscardItems1')">Discard</button>
              </div>
              
              <div class="p3i2">
                <p v-if="playerCards[1][2][2][0]">
                  <img height="350px" :src="playerCards[1][2][2][0]" alt=""></p>
              </div>
              
              <div class="p3i2Switch3">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchItems2To3')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p2ItemsC2P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP2Items btn btn-light btn-sm"  @click="giveManual('p2ItemsC2P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p2ItemsC2P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardItems btn btn-danger btn-sm" @click="giveManual('p2DiscardItems2')">Discard</button>
              </div>
              
              <div class="p3i3">
                <p v-if="playerCards[1][2][3][0]">
                  <img height="350px" :src="playerCards[1][2][3][0]" alt=""></p>
              </div>
              
              <div class="p3i3Switch4">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchItems3To4')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p2ItemsC3P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP2Items btn btn-light btn-sm"  @click="giveManual('p2ItemsC3P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p2ItemsC3P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardItems btn btn-danger btn-sm" @click="giveManual('p2DiscardItems3')">Discard</button>
              </div>
              
              <div class="p3i4">
                <p v-if="playerCards[1][2][4][0]">
                  <img height="350px" :src="playerCards[1][2][4][0]" alt=""></p>
              </div>
              
              <div class="p3i4Switch5">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchItems4To5')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p2ItemsC4P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP2Items btn btn-light btn-sm"  @click="giveManual('p2ItemsC4P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p2ItemsC4P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardItems btn btn-danger btn-sm" @click="giveManual('p2DiscardItems4')">Discard</button>
              </div>
              
              <div class="p3i5">
                <p v-if="playerCards[1][2][5][0]">
                  <img height="350px" :src="playerCards[1][2][5][0]" alt=""></p>
              </div>
              
              <div class="p3i5Switch6">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchItems5To6')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p2ItemsC5P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP2Items btn btn-light btn-sm"  @click="giveManual('p2ItemsC5P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p2ItemsC5P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5DiscardItems btn btn-danger btn-sm" @click="giveManual('p2DiscardItems5')">Discard</button>
              </div>
              
              <div class="p3i6">
                <p v-if="playerCards[1][2][6][0]">
                  <img height="350px" :src="playerCards[1][2][6][0]" alt=""></p>
              </div>
              
              <div class="p3i6Switch7">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchItems6To7')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p2ItemsC6P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP2Items btn btn-light btn-sm"  @click="giveManual('p2ItemsC6P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p2ItemsC6P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6DiscardItems btn btn-danger btn-sm" @click="giveManual('p2DiscardItems6')">Discard</button>
              </div>
              
              <div class="p3i7">
                <p v-if="playerCards[1][2][7][0]">
                  <img height="350px" :src="playerCards[1][2][7][0]" alt=""></p>
              </div>
              
              <div class="p3i7Switch8">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchItems7To8')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px"
                        class="p3h7GiveP1Items btn btn-success btn-sm"
                        @click="giveManual('p2ItemsC7P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP2Items btn btn-light btn-sm"  @click="giveManual('p2ItemsC7P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p2ItemsC7P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7DiscardItems btn btn-danger btn-sm" @click="giveManual('p2DiscardItems7')">Discard</button>
              </div>
              
              <div class="p3i8">
                <p v-if="playerCards[1][2][8][0]">
                  <img height="350px" :src="playerCards[1][2][8][0]" alt=""></p>
              </div>
              
              <div class="p3i8Switch9">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchItems8To9')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p2ItemsC8P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP2Items btn btn-light btn-sm"  @click="giveManual('p2ItemsC8P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p2ItemsC8P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8DiscardItems btn btn-danger btn-sm" @click="giveManual('p2DiscardItems8')">Discard</button>
              </div>
              
              <div class="p3i9">
                <p v-if="playerCards[1][2][9][0]">
                  <img height="350px" :src="playerCards[1][2][9][0]" alt=""></p>
              </div>
              
              <div class="p3i9Switch10">
                <button width="200px" class="3give1"  @click="giveManual('p2SwitchItems9To10')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p2ItemsC9P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP2Items btn btn-light btn-sm"  @click="giveManual('p2ItemsC9P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p2ItemsC9P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9DiscardItems btn btn-danger btn-sm" @click="giveManual('p2DiscardItems9')">Discard</button>
              </div>
              
              <div class="p3i10">
                <p v-if="playerCards[1][2][10][0]">
                  <img height="350px" :src="playerCards[1][2][10][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p2ItemsC10P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP2Items btn btn-light btn-sm"  @click="giveManual('p2ItemsC10P3')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p2ItemsC10P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10DiscardItems btn btn-danger btn-sm" @click="giveManual('p2DiscardItems10')">Discard</button>
              </div>
              
              <div class="p3su1">
                <p v-if="playerCards[1][7][1][0]">
                  <img height="350px" :src="playerCards[1][7][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p2DiscardUpgrades1')">Discard</button>
              </div>
              
              <div class="p3su2">
                <p v-if="playerCards[1][3][1][0]">
                  <img height="350px" :src="playerCards[1][3][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p2DiscardUpgrades2')">Discard</button>
              </div>
              
              <div class="p3su3">
                <p v-if="playerCards[1][3][2][0]">
                  <img height="350px" :src="playerCards[1][3][3][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p2DiscardUpgrades3')">Discard</button>
              </div>
              
              <div class="p3su4">
                <p v-if="playerCards[1][3][3][0]">
                  <img height="350px" :src="playerCards[1][3][4][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p2DiscardUpgrades4')">Discard</button>
              </div>
              
              <div class="shopSelect">
                <select class="form-control col" v-model="shop" label="Choose Shop">
                  <option value="null" disabled>Choose Shop</option>
                  <option value="1">Beaumonte</option>
                  <option value="2">Meridian</option>
                  <option value="3">Osiris Shipworks</option>
                  <option value="4">Persephone</option>
                  <option value="5">Regina</option>
                  <option value="6">Silverhold Munitions</option>
                  <option value="7">Space Bazaar</option>
                </select>
              </div>
              
              <div v-if="shop === '1'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[4][0][3][0]">
                    <img height="350px" :src="playerCards[4][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[4][0][1][1][0]">
                    <img height="350px" :src="playerCards[4][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px"
                          class="rotateBeaumondeDiscards btn btn-warning"
                          @click="giveManual('rotateBeaumondeDiscards')"
                          >Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawBeaumondeConsidered1Player2')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawBeaumondeConsidered2Player2')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawBeaumondeConsidered3Player2')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addBeaumondeShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addBeaumondeShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardBeaumondeShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardBeaumondeShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-btn btn-danger" @click="giveManual('discardBeaumondeShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[4][0][2][0][0]">
                    <img height="350px" :src="playerCards[4][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[4][0][2][1]">
                    <img height="350px" :src="playerCards[4][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[4][0][2][2]">
                    <img height="350px" :src="playerCards[4][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '2'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[5][0][3][0]">
                    <img height="350px" :src="playerCards[5][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[5][0][1][1][0]">
                    <img height="350px" :src="playerCards[5][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateMeridianDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawMeridianConsidered1Player2')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawMeridianConsidered2Player2')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawMeridianConsidered3Player2')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addMeridianShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addMeridianShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardMeridianShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardMeridianShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardMeridianShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[5][0][2][0][0]">
                    <img height="350px" :src="playerCards[5][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[5][0][2][1]">
                    <img height="350px" :src="playerCards[5][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[5][0][2][2]">
                    <img height="350px" :src="playerCards[5][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '3'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[6][0][3][0]">
                    <img height="350px" :src="playerCards[6][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[6][0][1][1][0]">
                    <img height="350px" :src="playerCards[6][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateOsirisShipworksDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawOsirisShipworksConsidered1Player2')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawOsirisShipworksConsidered2Player2')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawOsirisShipworksConsidered3Player2')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addOsirisShipworksShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addOsirisShipworksShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardOsirisShipworksShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardOsirisShipworksShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardOsirisShipworksShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[6][0][2][0][0]">
                    <img height="350px" :src="playerCards[6][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[6][0][2][1]">
                    <img height="350px" :src="playerCards[6][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[6][0][2][2]">
                    <img height="350px" :src="playerCards[6][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '4'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[7][0][3][0]">
                    <img height="350px" :src="playerCards[7][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[7][0][1][1][0]">
                    <img height="350px" :src="playerCards[7][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotatePersephoneDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawPersephoneConsidered1Player2')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawPersephoneConsidered2Player2')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawPersephoneConsidered3Player2')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addPersephoneShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addPersephoneShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardPersephoneShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardPersephoneShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardPersephoneShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[7][0][2][0][0]">
                    <img height="350px" :src="playerCards[7][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[7][0][2][1]">
                    <img height="350px" :src="playerCards[7][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[7][0][2][2]">
                    <img height="350px" :src="playerCards[7][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '5'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[8][0][3][0]">
                    <img height="350px" :src="playerCards[8][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[8][0][1][1][0]">
                    <img height="350px" :src="playerCards[8][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateReginaDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawReginaConsidered1Player2')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawReginaConsidered2Player2')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawReginaConsidered3Player2')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addReginaShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addReginaShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardReginaShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardReginaShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardReginaShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[8][0][2][0][0]">
                    <img height="350px" :src="playerCards[8][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[8][0][2][1]">
                    <img height="350px" :src="playerCards[8][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[8][0][2][2]">
                    <img height="350px" :src="playerCards[8][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '6'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[9][0][3][0]">
                    <img height="350px" :src="playerCards[9][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[9][0][1][1][0]">
                    <img height="350px" :src="playerCards[9][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateSilverholdMunitionsDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawSilverholdMunitionsConsidered1Player2')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawSilverholdMunitionsConsidered2Player2')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawSilverholdMunitionsConsidered3Player2')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addSilverholdMunitionsShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addSilverholdMunitionsShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardSilverholdMunitionsShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardSilverholdMunitionsShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardSilverholdMunitionsShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[9][0][2][0][0]">
                    <img height="350px" :src="playerCards[9][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[9][0][2][1]">
                    <img height="350px" :src="playerCards[9][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[9][0][2][2]">
                    <img height="350px" :src="playerCards[9][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '7'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[10][0][3][0]">
                    <img height="350px" :src="playerCards[10][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[10][0][1][1][0]">
                    <img height="350px" :src="playerCards[10][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateSpaceBazaarDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawSpaceBazaarConsidered1Player2')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawSpaceBazaarConsidered2Player2')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawSpaceBazaarConsidered3Player2')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addSpaceBazaarShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addSpaceBazaarShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardSpaceBazaarShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardSpaceBazaarShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardSpaceBazaarShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[10][0][2][0][0]">
                    <img height="350px" :src="playerCards[10][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[10][0][2][1]">
                    <img height="350px" :src="playerCards[10][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[10][0][2][2]">
                    <img height="350px" :src="playerCards[10][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div class="showAlliance">
                <p v-if="playerCards[21][1][1][0]">
                  <img height="350px" :src="playerCards[21][1][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawAlliance btn-lg btn-success" @click="giveManual('drawAlliance')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleAlliance btn-lg btn-danger" @click="giveManual('shuffleAlliance')">Shuffle</button> 
              </div>
              
              <div class="showBorder">
                <p v-if="playerCards[21][2][1][0]">
                  <img height="350px" :src="playerCards[21][2][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawBorder btn-lg btn-success" @click="giveManual('drawBorder')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleBorder btn-lg btn-danger" @click="giveManual('shuffleBorder')">Shuffle</button> 
              </div>

              <div class="showRim">
                <p v-if="playerCards[21][3][1][0]">
                  <img height="350px" :src="playerCards[21][3][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawRim btn-lg btn-success" @click="giveManual('drawRim')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleRim btn-lg btn-danger" @click="giveManual('shuffleRim')">Shuffle</button> 
              </div>

              <div class="showBounty">
                <p v-if="playerCards[21][4][1][0]">
                  <img height="350px" :src="playerCards[21][4][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawBounty btn-lg btn-success" @click="giveManual('drawBounty')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleBounty btn-lg btn-danger" @click="giveManual('shuffleBounty')">Shuffle</button> 
              </div>

              <div class="showMisbehave">
                <p v-if="playerCards[21][5][1][0]">
                  <img height="350px" :src="playerCards[21][5][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawMisbehave btn-lg btn-success" @click="giveManual('drawMisbehave')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleMisbehave btn-lg btn-danger" @click="giveManual('shuffleMisbehave')">Shuffle</button> 
              </div>

              <div class="showScenario">
                <p v-if="playerCards[23][0]">
                  <img height="1000px" :src="playerCards[23][0]" alt=""></p>
              </div>

              <div>
                <button width="200px" class="nextScenario btn-lg btn-success" @click="giveManual('nextScenario')">Next Scenario</button> 
              </div>
                
             

              <div class="moneyAmount">
                <p>Credits: {{ wallet2 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens2 }}</p>
              </div>

              <div class="goalTokensAdd">
                <div class="btn-group" role="group" aria-label="Basic example">
                  
                    <button class="btn-lg btn-success" @click="moveMoney1('goal2Add1')">+</button> 
                    <button class="btn-lg btn-danger" @click="moveMoney1('goal2Subtract1')">-</button> 
                  
                </div>
              </div>

              <div class="warrants">
                <p>Warrants: {{ warrant2 }}</p>
              </div>

              <div class="warrantsAdd">
                <div class="btn-group" role="group" aria-label="Basic example">
                  
                    <button class="btn-lg btn-success" @click="moveMoney1('warrant2Add1')">+</button> 
                    <button class="btn-lg btn-danger" @click="moveMoney1('warrant2Subtract1')">-</button> 
                  
                </div>
              </div>
              


              <div class="hundredCredits">
                <img v-bind:src="playerCards[22][0][0]"
                     v-on:click="moveMoney1('2add100')"
                     height="90px"/>
              </div>

              <div class="fiveHundred">
                <img v-bind:src="playerCards[22][1][0]"
                     v-on:click="moveMoney1('2add500')"
                     height="90px"/>
              </div>

              <div class="thousand">
                <img v-bind:src="playerCards[22][2][0]"
                     v-on:click="moveMoney1('2add1000')"
                     height="90px"/>
              </div>

              <div class="twoThousand">
                <img v-bind:src="playerCards[22][3][0]"
                     v-on:click="moveMoney1('2add2000')"
                     height="90px"/>
              </div>

              <div class="negativeHundredCredits">
                <img v-bind:src="playerCards[22][4][0]"
                     v-on:click="moveMoney1('2minus100')"
                     height="90px"/>
              </div>

              <div class="negativeFiveHundred">
                <img v-bind:src="playerCards[22][5][0]"
                     v-on:click="moveMoney1('2minus500')"
                     height="90px"/>
              </div>

              <div class="negativeThousand">
                <img v-bind:src="playerCards[22][6][0]"
                     v-on:click="moveMoney1('2minus1000')"
                     height="90px"/>
              </div>

              <div class="negativeTwoThousand">
                <img v-bind:src="playerCards[22][7][0]"
                     v-on:click="moveMoney1('2minus2000')"
                     height="90px"/>
              </div>
              
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>
    </div>  

<div class="masterPositionPlayer1">
      <div class="playerLabel">
        <p>Player 1</p>
        </div>
      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[1][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              
              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              
              
              
              <div class="img1">
                <p v-if="shipInv[1][0][0][0]"> 
                  <img height="500px" :src="shipCards[1][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[1][0][0][0]"
                     
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[1][0][1][0]"
                     
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[1][0][2][0]"
                     
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[1][0][3][0]"
                     
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[1][0][4][0]"
                     
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[1][0][5][0]"
                     
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[1][0][6][0]"
                     
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[1][0][7][0]"
                     
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[1][0][8][0]"
                     
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[1][0][9][0]"
                     
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[1][0][10][0]"
                     
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[1][0][11][0]"
                     
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[0][5][2][0]"> 
                  <img height="175px" :src="playerCards[0][5][2][0]" alt=""></p>
              </div>
              
              
              <div class="job1">
                <p v-if="playerCards[0][6][1][0]"> 
                  <img height="175px" :src="playerCards[0][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[0][6][1][0]"> 
                  <img height="175px" :src="playerCards[0][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[0][6][1][0]"> 
                  <img height="175px" :src="playerCards[0][6][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3h1">
                <p v-if="playerCards[0][0][1][0]">
                  <img height="350px" :src="playerCards[0][0][1][0]" alt="playerCards[0][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[0][0][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[0][1][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[0][2][0]"
                     
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[0][3][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[0][4][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[0][5][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[0][6][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[0][7][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[0][8][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[0][9][0]"
                     
                     height="45px"/>
              </div>
              
              
              <div class="p3h2">
                <p v-if="playerCards[0][0][2][0]"> 
                  <img height="350px" :src="playerCards[0][0][2][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              
              <div class="p3h3">
                <p v-if="playerCards[0][0][3][0]"> 
                  <img height="350px" :src="playerCards[0][0][3][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h4">
                <p v-if="playerCards[0][0][4][0]"> 
                  <img height="350px" :src="playerCards[0][0][4][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h5">
                <p v-if="playerCards[0][0][5][0]"> 
                  <img height="350px" :src="playerCards[0][0][5][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h6">
                <p v-if="playerCards[0][0][6][0]"> 
                  <img height="350px" :src="playerCards[0][0][6][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h7">
                <p v-if="playerCards[0][0][7][0]"> 
                  <img height="350px" :src="playerCards[0][0][7][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h8">
                <p v-if="playerCards[0][0][8][0]"> 
                  <img height="350px" :src="playerCards[0][0][8][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h9">
                <p v-if="playerCards[0][0][9][0]"> 
                  <img height="350px" :src="playerCards[0][0][9][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h10">
                <p v-if="playerCards[0][0][10][0]"> 
                  <img height="350px" :src="playerCards[0][0][10][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              
              <div class="p3i1">
                <p v-if="playerCards[0][2][1][0]">
                  <img height="350px" :src="playerCards[0][2][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3i2">
                <p v-if="playerCards[0][2][2][0]">
                  <img height="350px" :src="playerCards[0][2][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3i3">
                <p v-if="playerCards[0][2][3][0]">
                  <img height="350px" :src="playerCards[0][2][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3i4">
                <p v-if="playerCards[0][2][4][0]">
                  <img height="350px" :src="playerCards[0][2][4][0]" alt=""></p>
              </div>
              
              
              <div class="p3i5">
                <p v-if="playerCards[0][2][5][0]">
                  <img height="350px" :src="playerCards[0][2][5][0]" alt=""></p>
              </div>
              
              
              <div class="p3i6">
                <p v-if="playerCards[0][2][6][0]">
                  <img height="350px" :src="playerCards[0][2][6][0]" alt=""></p>
              </div>
              
              
              <div class="p3i7">
                <p v-if="playerCards[0][2][7][0]">
                  <img height="350px" :src="playerCards[0][2][7][0]" alt=""></p>
              </div>
              
              
              <div class="p3i8">
                <p v-if="playerCards[0][2][8][0]">
                  <img height="350px" :src="playerCards[0][2][8][0]" alt=""></p>
              </div>
              
              
              <div class="p3i9">
                <p v-if="playerCards[0][2][9][0]">
                  <img height="350px" :src="playerCards[0][2][9][0]" alt=""></p>
              </div>
              
              
              <div class="p3i10">
                <p v-if="playerCards[0][2][10][0]">
                  <img height="350px" :src="playerCards[0][2][10][0]" alt=""></p>
              </div>
              
              
              <div class="p3su1">
                <p v-if="playerCards[0][7][1][0]">
                  <img height="350px" :src="playerCards[0][7][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3su2">
                <p v-if="playerCards[0][3][1][0]">
                  <img height="350px" :src="playerCards[0][3][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3su3">
                <p v-if="playerCards[0][3][2][0]">
                  <img height="350px" :src="playerCards[0][3][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3su4">
                <p v-if="playerCards[0][3][3][0]">
                  <img height="350px" :src="playerCards[0][3][4][0]" alt=""></p>
              </div>
              
              
              <div class="moneyAmount">
                <p>Credits: {{ wallet1 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens1 }}</p>
              </div>

              
              <div class="warrants">
                <p>Warrants: {{ warrant1 }}</p>
              </div>

              
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>





    

<div class="masterPositionPlayer3">
      <div class="playerLabel">
        <p>Player 3</p>
        </div>
      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[3][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              
              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              
              
              
              <div class="img1">
                <p v-if="shipInv[1][0][0][0]"> 
                  <img height="500px" :src="shipCards[3][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[3][0][0][0]"
                     
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[3][0][1][0]"
                     
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[3][0][2][0]"
                     
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[3][0][3][0]"
                     
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[3][0][4][0]"
                     
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[3][0][5][0]"
                     
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[3][0][6][0]"
                     
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[3][0][7][0]"
                     
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[3][0][8][0]"
                     
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[3][0][9][0]"
                     
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[3][0][10][0]"
                     
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[3][0][11][0]"
                     
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[2][5][2][0]"> 
                  <img height="175px" :src="playerCards[2][5][2][0]" alt=""></p>
              </div>
              
              
              <div class="job1">
                <p v-if="playerCards[2][6][1][0]"> 
                  <img height="175px" :src="playerCards[2][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[2][6][1][0]"> 
                  <img height="175px" :src="playerCards[2][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[2][6][1][0]"> 
                  <img height="175px" :src="playerCards[2][6][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3h1">
                <p v-if="playerCards[2][0][1][0]">
                  <img height="350px" :src="playerCards[2][0][1][0]" alt="playerCards[2][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[2][0][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[2][1][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[2][2][0]"
                     
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[2][3][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[2][4][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[2][5][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[2][6][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[2][7][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[2][8][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[2][9][0]"
                     
                     height="45px"/>
              </div>
              
              
              <div class="p3h2">
                <p v-if="playerCards[2][0][2][0]"> 
                  <img height="350px" :src="playerCards[2][0][2][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              
              <div class="p3h3">
                <p v-if="playerCards[2][0][3][0]"> 
                  <img height="350px" :src="playerCards[2][0][3][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h4">
                <p v-if="playerCards[2][0][4][0]"> 
                  <img height="350px" :src="playerCards[2][0][4][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h5">
                <p v-if="playerCards[2][0][5][0]"> 
                  <img height="350px" :src="playerCards[2][0][5][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h6">
                <p v-if="playerCards[2][0][6][0]"> 
                  <img height="350px" :src="playerCards[2][0][6][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h7">
                <p v-if="playerCards[2][0][7][0]"> 
                  <img height="350px" :src="playerCards[2][0][7][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h8">
                <p v-if="playerCards[2][0][8][0]"> 
                  <img height="350px" :src="playerCards[2][0][8][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h9">
                <p v-if="playerCards[2][0][9][0]"> 
                  <img height="350px" :src="playerCards[2][0][9][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h10">
                <p v-if="playerCards[2][0][10][0]"> 
                  <img height="350px" :src="playerCards[2][0][10][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              
              <div class="p3i1">
                <p v-if="playerCards[2][2][1][0]">
                  <img height="350px" :src="playerCards[2][2][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3i2">
                <p v-if="playerCards[2][2][2][0]">
                  <img height="350px" :src="playerCards[2][2][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3i3">
                <p v-if="playerCards[2][2][3][0]">
                  <img height="350px" :src="playerCards[2][2][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3i4">
                <p v-if="playerCards[2][2][4][0]">
                  <img height="350px" :src="playerCards[2][2][4][0]" alt=""></p>
              </div>
              
              
              <div class="p3i5">
                <p v-if="playerCards[2][2][5][0]">
                  <img height="350px" :src="playerCards[2][2][5][0]" alt=""></p>
              </div>
              
              
              <div class="p3i6">
                <p v-if="playerCards[2][2][6][0]">
                  <img height="350px" :src="playerCards[2][2][6][0]" alt=""></p>
              </div>
              
              
              <div class="p3i7">
                <p v-if="playerCards[2][2][7][0]">
                  <img height="350px" :src="playerCards[2][2][7][0]" alt=""></p>
              </div>
              
              
              <div class="p3i8">
                <p v-if="playerCards[2][2][8][0]">
                  <img height="350px" :src="playerCards[2][2][8][0]" alt=""></p>
              </div>
              
              
              <div class="p3i9">
                <p v-if="playerCards[2][2][9][0]">
                  <img height="350px" :src="playerCards[2][2][9][0]" alt=""></p>
              </div>
              
              
              <div class="p3i10">
                <p v-if="playerCards[2][2][10][0]">
                  <img height="350px" :src="playerCards[2][2][10][0]" alt=""></p>
              </div>
              
              
              <div class="p3su1">
                <p v-if="playerCards[2][7][1][0]">
                  <img height="350px" :src="playerCards[2][7][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3su2">
                <p v-if="playerCards[2][3][1][0]">
                  <img height="350px" :src="playerCards[2][3][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3su3">
                <p v-if="playerCards[2][3][2][0]">
                  <img height="350px" :src="playerCards[2][3][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3su4">
                <p v-if="playerCards[2][3][3][0]">
                  <img height="350px" :src="playerCards[2][3][4][0]" alt=""></p>
              </div>
              
              
              <div class="moneyAmount">
                <p>Credits: {{ wallet3 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens3 }}</p>
              </div>

              
              <div class="warrants">
                <p>Warrants: {{ warrant3 }}</p>
              </div>

              
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>


    </div>  
      
      
    </div>  


    <div class="masterPositionPlayer4Altered2">
      <div class="playerLabel">
        <p>Player 4</p>
        </div>
      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[4][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              
              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              
              
              
          <div class="img1">  
                <p v-if="shipInv[4][0][0][0]"> 
                  <img height="500px" :src="shipCards[4][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[4][0][0][0]"
                     
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[4][0][1][0]"
                     
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[4][0][2][0]"
                     
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[4][0][3][0]"
                     
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[4][0][4][0]"
                     
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[4][0][5][0]"
                     
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[4][0][6][0]"
                     
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[4][0][7][0]"
                     
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[4][0][8][0]"
                     
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[4][0][9][0]"
                     
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[4][0][10][0]"
                     
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[4][0][11][0]"
                     
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[3][5][2][0]"> 
                  <img height="175px" :src="playerCards[3][5][2][0]" alt=""></p>
              </div>
              
              
              <div class="job1">
                <p v-if="playerCards[3][6][1][0]"> 
                  <img height="175px" :src="playerCards[3][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[3][6][1][0]"> 
                  <img height="175px" :src="playerCards[3][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[3][6][1][0]"> 
                  <img height="175px" :src="playerCards[3][6][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3h1">
                <p v-if="playerCards[3][0][1][0]">
                  <img height="350px" :src="playerCards[3][0][1][0]" alt="playerCards[3][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[3][0][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[3][1][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[3][2][0]"
                     
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[3][3][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[3][4][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[3][5][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[3][6][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[3][7][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[3][8][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[3][9][0]"
                     
                     height="45px"/>
              </div>
              
              
              <div class="p3h2">
                <p v-if="playerCards[3][0][2][0]"> 
                  <img height="350px" :src="playerCards[3][0][2][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              
              <div class="p3h3">
                <p v-if="playerCards[3][0][3][0]"> 
                  <img height="350px" :src="playerCards[3][0][3][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h4">
                <p v-if="playerCards[3][0][4][0]"> 
                  <img height="350px" :src="playerCards[3][0][4][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h5">
                <p v-if="playerCards[3][0][5][0]"> 
                  <img height="350px" :src="playerCards[3][0][5][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h6">
                <p v-if="playerCards[3][0][6][0]"> 
                  <img height="350px" :src="playerCards[3][0][6][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h7">
                <p v-if="playerCards[3][0][7][0]"> 
                  <img height="350px" :src="playerCards[3][0][7][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h8">
                <p v-if="playerCards[3][0][8][0]"> 
                  <img height="350px" :src="playerCards[3][0][8][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h9">
                <p v-if="playerCards[3][0][9][0]"> 
                  <img height="350px" :src="playerCards[3][0][9][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h10">
                <p v-if="playerCards[3][0][10][0]"> 
                  <img height="350px" :src="playerCards[3][0][10][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              
              <div class="p3i1">
                <p v-if="playerCards[3][2][1][0]">
                  <img height="350px" :src="playerCards[3][2][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3i2">
                <p v-if="playerCards[3][2][2][0]">
                  <img height="350px" :src="playerCards[3][2][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3i3">
                <p v-if="playerCards[3][2][3][0]">
                  <img height="350px" :src="playerCards[3][2][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3i4">
                <p v-if="playerCards[3][2][4][0]">
                  <img height="350px" :src="playerCards[3][2][4][0]" alt=""></p>
              </div>
              
              
              <div class="p3i5">
                <p v-if="playerCards[3][2][5][0]">
                  <img height="350px" :src="playerCards[3][2][5][0]" alt=""></p>
              </div>
              
              
              <div class="p3i6">
                <p v-if="playerCards[3][2][6][0]">
                  <img height="350px" :src="playerCards[3][2][6][0]" alt=""></p>
              </div>
              
              
              <div class="p3i7">
                <p v-if="playerCards[3][2][7][0]">
                  <img height="350px" :src="playerCards[3][2][7][0]" alt=""></p>
              </div>
              
              
              <div class="p3i8">
                <p v-if="playerCards[3][2][8][0]">
                  <img height="350px" :src="playerCards[3][2][8][0]" alt=""></p>
              </div>
              
              
              <div class="p3i9">
                <p v-if="playerCards[3][2][9][0]">
                  <img height="350px" :src="playerCards[3][2][9][0]" alt=""></p>
              </div>
              
              
              <div class="p3i10">
                <p v-if="playerCards[3][2][10][0]">
                  <img height="350px" :src="playerCards[3][2][10][0]" alt=""></p>
              </div>
              
              
              <div class="p3su1">
                <p v-if="playerCards[3][7][1][0]">
                  <img height="350px" :src="playerCards[3][7][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3su2">
                <p v-if="playerCards[3][3][1][0]">
                  <img height="350px" :src="playerCards[3][3][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3su3">
                <p v-if="playerCards[3][3][2][0]">
                  <img height="350px" :src="playerCards[3][3][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3su4">
                <p v-if="playerCards[3][3][3][0]">
                  <img height="350px" :src="playerCards[3][3][4][0]" alt=""></p>
              </div>
              
              
              <div class="moneyAmount">
                <p>Credits: {{ wallet4 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens4 }}</p>
              </div>

              
              <div class="warrants">
                <p>Warrants: {{ warrant4 }}</p>
              </div>

              
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>


    </div>

    
  </div>
  


  
  <div v-else-if="player === '3'">
    <div v-if ="player === 'chatable'">
      <div v-if="ready">
        <h1>READY</h1>
        <div class="boxPosition">
          <div class="row">
            <div class="col-md-4 col-lg-6 offset-lg-3 offset-md-4">
              
              <h4>{{name}}</h4>          
              <h5>{{connectionCount}} Connected, {{online.length}} Online</h5>
              
              <p v-for="item in info" :key="item">
                <small>{{item.name}} {{item.type}}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    <div v-if="player === 'chat-box'">
      <div class="row">
        <div class="col">
          <form @submit.prevent="setName" class="mt-4">
            <div class="form-group row">
              <input type="text" class="form-control col" v-model="name" placeholder="Set Your Name First">
              <input type="submit" value="Add" class="btn btn-sm btn-info ml-1 col-2">
            </div>
          </form>
        </div>
      </div>
    </div>

    
    
    <div class="masterPosition">
      <div class="scrollDown">
        <h3>Scroll Down to use Game Cards</h3>
        <h3>Zoom Out to see Full Board</h3>
      </div>
      
      <div class="movingButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          <button class="btn btn-secondary btn-lg" v-on:click="move3('keepPosition3')">Add Piece</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move3('left3')">Left</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move3('right3')">Right</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move3('up3')">Up</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move3('down3')">Down</button>
          
        </div>
        <h3>Player Ship</h3>
      </div>

      <div class="allianceButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          <button class="btn btn-secondary btn-lg" v-on:click="move5('keepPosition5')">Add Piece</button>
   
            <button class="btn btn-secondary btn-lg" v-on:click="move5('left5')">Left</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move5('right5')">Right</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move5('up5')">Up</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move5('down5')">Down</button>
          
        </div>
        <h3>Alliance Base</h3>
      </div>

      <div class="cruiserButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          <button class="btn btn-secondary btn-lg" v-on:click="move7('keepPosition7')">Add Piece</button>
            
            <button class="btn btn-secondary btn-lg" v-on:click="move7('left7')">Left</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move7('right7')">Right</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move7('up7')">Up</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move7('down7')">Down</button>
          
        </div>
        <h3>Reaver Ship</h3>
      </div>

      <div class="reaverButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          
            <button class="btn btn-secondary btn-lg" v-on:click="move6('keepPosition6')">Add Piece</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('left6')">Left</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('right6')">Right</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('up6')">Up</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('down6')">Down</button>
          
        </div>
        <h3>Cruiser</h3>
      </div>
      
      
        <div class="playerNumber">
          <p>You Are Player {{player}}!</p>
        </div>

      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[3][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              <div class="rollDice">
                <p> {{ shipCards2[0]  }}</p>
              </div>

              <div class="diceBox">
                <img src="./dice_box.jpg"
                     height="100px"/>
              </div>

              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              <div>
                <button width="200px" class="diceButton btn btn-success btn-sm" @click="chosenShip2('rollDice')">Roll Dice</button>
              </div>

              <div class="drawJobLabel">
                <h2>Click on Job Card to Draw</h2>
              </div>
              
              <div class="drawJob1">
                <img v-bind:src="playerCards[20][0]"
                     v-on:click="giveManual('Player3DrawAmnonDuul')"
                     height="175px"/>
              </div>
              
              <div class="drawJob2">
                <img v-bind:src="playerCards[20][1]"
                     v-on:click="giveManual('Player3DrawBadger')"
                     height="175px"/>
              </div>
              
              <div class="drawJob3">
                <img v-bind:src="playerCards[20][2]"
                     v-on:click="giveManual('Player3DrawFantyMingo')"
                     height="175px"/>
              </div>
              
              <div class="drawJob4">
                <img v-bind:src="playerCards[20][3]"
                     v-on:click="giveManual('Player3DrawHarken')"
                     height="175px"/>
              </div>
              
              <div class="drawJob5">
                <img v-bind:src="playerCards[20][4]"
                     v-on:click="giveManual('Player3DrawHarrow')"
                     height="175px"/>
              </div>
              
              <div class="drawJob6">
                <img v-bind:src="playerCards[20][5]"
                     v-on:click="giveManual('Player3DrawHiggins')"
                     height="175px"/>
              </div>
              
              <div class="drawJob7">
                <img v-bind:src="playerCards[20][6]"
                     v-on:click="giveManual('Player3DrawNiska')"
                     height="175px"/>
              </div>
              
              <div class="drawJob8">
                <img v-bind:src="playerCards[20][7]"
                     v-on:click="giveManual('Player3DrawPatience')"
                     height="175px"/>
              </div>
              
              
              <div class="img1">
                <p v-if="shipInv[3][0][0][0]"> 
                  <img height="500px" :src="shipCards[3][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[3][0][0][0]"
                     v-on:click="supply('3box1')"
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[3][0][1][0]"
                     v-on:click="supply('3box2')"
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[3][0][2][0]"
                     v-on:click="supply('3box3')"
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[3][0][3][0]"
                     v-on:click="supply('3box4')"
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[3][0][4][0]"
                     v-on:click="supply('3box5')"
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[3][0][5][0]"
                     v-on:click="supply('3box6')"
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[3][0][6][0]"
                     v-on:click="supply('3box7')"
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[3][0][7][0]"
                     v-on:click="supply('3box8')"
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[3][0][8][0]"
                     v-on:click="supply('3box9')"
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[3][0][9][0]"
                     v-on:click="supply('3box10')"
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[3][0][10][0]"
                     v-on:click="supply('3box11')"
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[3][0][11][0]"
                     v-on:click="supply('3box12')"
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[2][5][2][0]"> 
                  <img height="175px" :src="playerCards[2][5][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="rotateJobs btn btn-success btn-sm"
                        @click="giveManual('finishedJobRotatePlayer3')">Next</button>
              </div>

              <div class="job1">
                <p v-if="playerCards[2][6][1][0]"> 
                  <img height="175px" :src="playerCards[2][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[2][6][1][0]"> 
                  <img height="175px" :src="playerCards[2][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[2][6][1][0]"> 
                  <img height="175px" :src="playerCards[2][6][3][0]" alt=""></p>
              </div>
              
              <div class="jobHidden1">
                <p v-if="playerCards[2][4][1][0]"> 
                  <img height="175px" :src="playerCards[2][4][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h1StartJob btn btn-success btn-sm" @click="giveManual('startJobP3C1')">Start Job</button>
              </div>

              <div>
                <button width="200px" class="p3h2StartJob btn btn-success btn-sm" @click="giveManual('startJobP3C2')">Start Job</button>
              </div>


              <div>
                <button width="200px" class="p3h3StartJob btn btn-success btn-sm" @click="giveManual('startJobP3C3')">Start Job</button>
              </div>

              <div>
                <button width="200px" class="p3h1JobComplete btn btn-success btn-sm" @click="giveManual('p3FinishedJobs1')">Complete</button>
              </div>
              

              <div>
                <button width="200px" class="p3h1DiscardJobStarted btn btn-danger btn-sm" @click="giveManual('p3DiscardJobsStarted1')">Discard</button>
              </div>


              <div>
                <button width="200px" class="p3h2DiscardJobStarted btn btn-danger btn-sm" @click="giveManual('p3DiscardJobsStarted2')">Discard</button>
              </div>


              <div>
                <button width="200px" class="p3h3DiscardJobStarted btn btn-danger btn-sm" @click="giveManual('p3DiscardJobsStarted3')">Discard</button>
              </div>
              
              
              <div>
                <button width="200px" class="p3h1DiscardJob btn btn-danger btn-sm" @click="giveManual('p3DiscardJobs1')">Discard</button>
              </div>
              
              <div class="jobHidden2">
                <p v-if="playerCards[2][4][1][0]"> 
                  <img height="175px" :src="playerCards[2][4][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h2JobComplete btn btn-success btn-sm" @click="giveManual('p3FinishedJobs2')">Complete</button>
              </div>
              
              
              <div>
                <button width="200px" class="p3h2DiscardJob btn btn-danger btn-sm" @click="giveManual('p3DiscardJobs2')">Discard</button>
              </div>
              
              <div class="jobHidden3">
                <p v-if="playerCards[2][4][1][0]"> 
                  <img height="175px" :src="playerCards[2][4][3][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h3JobComplete btn btn-success btn-sm" @click="giveManual('p3FinishedJobs3')">Complete</button>
              </div>
              
              
              <div>
                <button width="200px" class="p3h3DiscardJob btn btn-danger btn-sm" @click="giveManual('p3DiscardJobs3')">Discard</button>
              </div>
              
              
              
              
              
              <div class="p3h1">
                <p v-if="playerCards[2][0][1][0]">
                  <img height="350px" :src="playerCards[2][0][1][0]" alt="playerCards[0][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[2][0][0]"
                     v-on:click="chosenMood('p3c1ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[2][1][0]"
                     v-on:click="chosenMood('p3c2ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[2][2][0]"
                     v-on:click="chosenMood('p3c3ChangeMood')"
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[2][3][0]"
                     v-on:click="chosenMood('p3c4ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[2][4][0]"
                     v-on:click="chosenMood('p3c5ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[2][5][0]"
                     v-on:click="chosenMood('p3c6ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[2][6][0]"
                     v-on:click="chosenMood('p3c7ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[2][7][0]"
                     v-on:click="chosenMood('p3c8ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[2][8][0]"
                     v-on:click="chosenMood('p3c9ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[2][9][0]"
                     v-on:click="chosenMood('p3c10ChangeMood')"
                     height="45px"/>
              </div>
              
              <div class="p3h1Switch2">
                <button width="200px" class="3give1"  @click="giveManual('p3Switch1To2')">&#11138;</button>
              </div>

              <div class="p3priv1Switch2">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchPriv1To2')">&#11138;</button>
              </div>

              <div class="p3priv2Switch3">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchPriv2To3')">&#11138;</button>
              </div>

              <div class="p3priv3Switch4">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchPriv3To4')">&#11138;</button>
              </div>
              
              <div class="p3priv4Switch5">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchPriv4To5')">&#11138;</button>
              </div>

              <div class="p3priv5Switch6">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchPriv5To6')">&#11138;</button>
              </div>
              
              <div class="p3priv6Switch7">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchPriv6To7')">&#11138;</button>
              </div>

              <div class="p3priv7Switch8">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchPriv7To8')">&#11138;</button>
              </div>

              <div class="p3priv8Switch9">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchPriv8To9')">&#11138;</button>
              </div>

              <div class="p3priv9Switch10">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchPriv9To10')">&#11138;</button>
              </div>

              
              <div>
                <button width="200px" class="p3h1GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC1P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC1P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC1P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew1')">Discard</button>
              </div>
              
              <div class="p3h2">
                <p v-if="playerCards[2][0][2][0]"> 
                  <img height="350px" :src="playerCards[2][0][2][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h2Switch3">
                <button width="200px" class="3give1"  @click="giveManual('p3Switch2To3')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC2P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC2P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC2P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew2')">Discard</button>
              </div>
              
              <div class="p3h3">
                <p v-if="playerCards[2][0][3][0]"> 
                  <img height="350px" :src="playerCards[2][0][3][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h3Switch4">
                <button width="200px" class="3give1"  @click="giveManual('p3Switch3To4')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC3P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC3P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC3P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew3')">Discard</button>
              </div>
              
              <div class="p3h4">
                <p v-if="playerCards[2][0][4][0]"> 
                  <img height="350px" :src="playerCards[2][0][4][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h4Switch5">
                <button width="200px" class="3give1"  @click="giveManual('p3Switch4To5')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC4P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC4P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC4P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew4')">Discard</button>
              </div>
              
              <div class="p3h5">
                <p v-if="playerCards[2][0][5][0]"> 
                  <img height="350px" :src="playerCards[2][0][5][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h5Switch6">
                <button width="200px" class="3give1"  @click="giveManual('p3Switch5To6')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC5P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC5P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC5P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew5')">Discard</button>
              </div>
              
              <div class="p3h6">
                <p v-if="playerCards[2][0][6][0]"> 
                  <img height="350px" :src="playerCards[2][0][6][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h6Switch7">
                <button width="200px" class="3give1"  @click="giveManual('p3Switch6To7')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC6P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC6P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC6P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew6')">Discard</button>
              </div>
              
              <div class="p3h7">
                <p v-if="playerCards[2][0][7][0]"> 
                  <img height="350px" :src="playerCards[2][0][7][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h7Switch8">
                <button width="200px" class="3give1"  @click="giveManual('p3Switch7To8')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC7P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC7P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC7P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew7')">Discard</button>
              </div>
              
              <div class="p3h8">
                <p v-if="playerCards[2][0][8][0]"> 
                  <img height="350px" :src="playerCards[2][0][8][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h8Switch9">
                <button width="200px" class="3give1"  @click="giveManual('p3Switch8To9')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC8P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC8P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC8P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew8')">Discard</button>
              </div>
              
              <div class="p3h9">
                <p v-if="playerCards[2][0][9][0]"> 
                  <img height="350px" :src="playerCards[2][0][9][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h9Switch10">
                <button width="200px" class="3give1"  @click="giveManual('p3Switch9To10')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC9P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC9P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC9P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew9')">Discard</button>
              </div>
              
              <div class="p3h10">
                <p v-if="playerCards[2][0][10][0]"> 
                  <img height="350px" :src="playerCards[2][0][10][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p3CrewC10P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p3CrewC10P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP4Crew btn btn-warning btn-sm"  @click="giveManual('p3CrewC10P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10DiscardCrew btn btn-danger btn-sm" @click="giveManual('p3DiscardCrew10')">Discard</button>
              </div>
              
              <div class="p3pr1">
                <p v-if="playerCards[2][1][1][0]">
                  <img height="350px" :src="playerCards[2][1][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr1SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv1SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate1')">Discard</button>
              </div>
              
              <div class="p3pr2">
                <p v-if="playerCards[2][1][2][0]">
                  <img height="350px" :src="playerCards[2][1][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr2SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv2SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate2')">Discard</button>
              </div>
              
              <div class="p3pr3">
                <p v-if="playerCards[2][1][3][0]">
                  <img height="350px" :src="playerCards[2][1][3][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr3SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv3SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate3')">Discard</button>
              </div>
              
              <div class="p3pr4">
                <p v-if="playerCards[2][1][4][0]">
                  <img height="350px" :src="playerCards[2][1][4][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr4SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv4SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate4')">Discard</button>
              </div>
              
              <div class="p3pr5">
                <p v-if="playerCards[2][1][5][0]">
                  <img height="350px" :src="playerCards[2][1][5][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr5SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv5SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate5')">Discard</button>
              </div>
              
              <div class="p3pr6">
                <p v-if="playerCards[2][1][6][0]">
                  <img height="350px" :src="playerCards[2][1][6][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr6SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv6SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate6')">Discard</button>
              </div>
              
              <div class="p3pr7">
                <p v-if="playerCards[2][1][7][0]">
                  <img height="350px" :src="playerCards[2][1][7][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr7SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv7SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate7')">Discard</button>
              </div>
              
              <div class="p3pr8">
                <p v-if="playerCards[2][1][8][0]">
                  <img height="350px" :src="playerCards[2][1][8][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr8SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv8SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate8')">Discard</button>
              </div>
              
              <div class="p3pr9">
                <p v-if="playerCards[2][1][9][0]">
                  <img height="350px" :src="playerCards[2][1][9][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr9SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv9SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate9')">Discard</button>
              </div>
              
              <div class="p3pr10">
                <p v-if="playerCards[2][1][10][0]">
                  <img height="350px" :src="playerCards[2][1][10][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr10SwitchDown btn btn-info btn-sm" @click="giveManual('p3Priv10SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p3DiscardPrivate10')">Discard</button>
              </div>
              
              <div class="p3i1">
                <p v-if="playerCards[2][2][1][0]">
                  <img height="350px" :src="playerCards[2][2][1][0]" alt=""></p>
              </div>
              
              <div class="p3i1Switch2">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems1To2')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC1P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC1P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC1P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems1')">Discard</button>
              </div>
              
              <div class="p3i2">
                <p v-if="playerCards[2][2][2][0]">
                  <img height="350px" :src="playerCards[2][2][2][0]" alt=""></p>
              </div>
              
              <div class="p3i2Switch3">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems2To3')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC2P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC2P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC2P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems2')">Discard</button>
              </div>
              
              <div class="p3i3">
                <p v-if="playerCards[2][2][3][0]">
                  <img height="350px" :src="playerCards[2][2][3][0]" alt=""></p>
              </div>
              
              <div class="p3i3Switch4">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems3To4')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC3P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC3P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC3P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems3')">Discard</button>
              </div>
              
              <div class="p3i4">
                <p v-if="playerCards[2][2][4][0]">
                  <img height="350px" :src="playerCards[2][2][4][0]" alt=""></p>
              </div>
              
              <div class="p3i4Switch5">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems4To5')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC4P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC4P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC4P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems4')">Discard</button>
              </div>
              
              <div class="p3i5">
                <p v-if="playerCards[2][2][5][0]">
                  <img height="350px" :src="playerCards[2][2][5][0]" alt=""></p>
              </div>
              
              <div class="p3i5Switch6">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems5To6')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC5P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC5P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC5P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems5')">Discard</button>
              </div>
              
              <div class="p3i6">
                <p v-if="playerCards[2][2][6][0]">
                  <img height="350px" :src="playerCards[2][2][6][0]" alt=""></p>
              </div>
              
              <div class="p3i6Switch7">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems6To7')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC6P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC6P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC6P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems6')">Discard</button>
              </div>
              
              <div class="p3i7">
                <p v-if="playerCards[2][2][7][0]">
                  <img height="350px" :src="playerCards[2][2][7][0]" alt=""></p>
              </div>
              
              <div class="p3i7Switch8">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems7To8')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px"
                        class="p3h7GiveP1Items btn btn-primary btn-sm"
                        @click="giveManual('p3ItemsC7P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC7P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC7P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems7')">Discard</button>
              </div>
              
              <div class="p3i8">
                <p v-if="playerCards[2][2][8][0]">
                  <img height="350px" :src="playerCards[2][2][8][0]" alt=""></p>
              </div>
              
              <div class="p3i8Switch9">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems8To9')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC8P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC8P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC8P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems8')">Discard</button>
              </div>
              
              <div class="p3i9">
                <p v-if="playerCards[2][2][9][0]">
                  <img height="350px" :src="playerCards[2][2][9][0]" alt=""></p>
              </div>
              
              <div class="p3i9Switch10">
                <button width="200px" class="3give1"  @click="giveManual('p3SwitchItems9To10')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC9P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC9P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC9P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems9')">Discard</button>
              </div>
              
              <div class="p3i10">
                <p v-if="playerCards[2][2][10][0]">
                  <img height="350px" :src="playerCards[2][2][10][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p3ItemsC10P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP2Items btn btn-success btn-sm"  @click="giveManual('p3ItemsC10P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP4Items btn btn-warning btn-sm"  @click="giveManual('p3ItemsC10P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10DiscardItems btn btn-danger btn-sm" @click="giveManual('p3DiscardItems10')">Discard</button>
              </div>
              
              <div class="p3su1">
                <p v-if="playerCards[2][7][1][0]">
                  <img height="350px" :src="playerCards[2][7][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p3DiscardUpgrades1')">Discard</button>
              </div>
              
              <div class="p3su2">
                <p v-if="playerCards[2][3][1][0]">
                  <img height="350px" :src="playerCards[2][3][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p3DiscardUpgrades2')">Discard</button>
              </div>
              
              <div class="p3su3">
                <p v-if="playerCards[2][3][2][0]">
                  <img height="350px" :src="playerCards[2][3][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p3DiscardUpgrades3')">Discard</button>
              </div>
              
              <div class="p3su4">
                <p v-if="playerCards[2][3][4][0]">
                  <img height="350px" :src="playerCards[2][3][3][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p3DiscardUpgrades4')">Discard</button>
              </div>
              
              <div class="shopSelect">
                <select class="form-control col" v-model="shop" label="Choose Shop">
                  <option value="null" disabled>Choose Shop</option>
                  <option value="1">Beaumonte</option>
                  <option value="2">Meridian</option>
                  <option value="3">Osiris Shipworks</option>
                  <option value="4">Persephone</option>
                  <option value="5">Regina</option>
                  <option value="6">Silverhold Munitions</option>
                  <option value="7">Space Bazaar</option>
                </select>
              </div>
              
              <div v-if="shop === '1'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[4][0][3][0]">
                    <img height="350px" :src="playerCards[4][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[4][0][1][1][0]">
                    <img height="350px" :src="playerCards[4][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px"
                          class="rotateBeaumondeDiscards btn btn-warning"
                          @click="giveManual('rotateBeaumondeDiscards')"
                          >Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawBeaumondeConsidered1Player3')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawBeaumondeConsidered2Player3')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawBeaumondeConsidered3Player3')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addBeaumondeShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addBeaumondeShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardBeaumondeShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardBeaumondeShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-btn btn-danger" @click="giveManual('discardBeaumondeShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[4][0][2][0][0]">
                    <img height="350px" :src="playerCards[4][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[4][0][2][1]">
                    <img height="350px" :src="playerCards[4][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[4][0][2][2]">
                    <img height="350px" :src="playerCards[4][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '2'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[5][0][3][0]">
                    <img height="350px" :src="playerCards[5][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[5][0][1][1][0]">
                    <img height="350px" :src="playerCards[5][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateMeridianDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawMeridianConsidered1Player3')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawMeridianConsidered2Player3')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawMeridianConsidered3Player3')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addMeridianShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addMeridianShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardMeridianShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardMeridianShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardMeridianShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[5][0][2][0][0]">
                    <img height="350px" :src="playerCards[5][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[5][0][2][1]">
                    <img height="350px" :src="playerCards[5][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[5][0][2][2]">
                    <img height="350px" :src="playerCards[5][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '3'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[6][0][3][0]">
                    <img height="350px" :src="playerCards[6][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[6][0][1][1][0]">
                    <img height="350px" :src="playerCards[6][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateOsirisShipworksDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawOsirisShipworksConsidered1Player3')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawOsirisShipworksConsidered2Player3')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawOsirisShipworksConsidered3Player3')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addOsirisShipworksShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addOsirisShipworksShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardOsirisShipworksShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardOsirisShipworksShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardOsirisShipworksShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[6][0][2][0][0]">
                    <img height="350px" :src="playerCards[6][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[6][0][2][1]">
                    <img height="350px" :src="playerCards[6][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[6][0][2][2]">
                    <img height="350px" :src="playerCards[6][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '4'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[7][0][3][0]">
                    <img height="350px" :src="playerCards[7][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[7][0][1][1][0]">
                    <img height="350px" :src="playerCards[7][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotatePersephoneDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawPersephoneConsidered1Player3')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawPersephoneConsidered2Player3')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawPersephoneConsidered3Player3')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addPersephoneShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addPersephoneShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardPersephoneShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardPersephoneShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardPersephoneShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[7][0][2][0][0]">
                    <img height="350px" :src="playerCards[7][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[7][0][2][1]">
                    <img height="350px" :src="playerCards[7][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[7][0][2][2]">
                    <img height="350px" :src="playerCards[7][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '5'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[8][0][3][0]">
                    <img height="350px" :src="playerCards[8][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[8][0][1][1][0]">
                    <img height="350px" :src="playerCards[8][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateReginaDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawReginaConsidered1Player3')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawReginaConsidered2Player3')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawReginaConsidered3Player3')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addReginaShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addReginaShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardReginaShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardReginaShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardReginaShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[8][0][2][0][0]">
                    <img height="350px" :src="playerCards[8][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[8][0][2][1]">
                    <img height="350px" :src="playerCards[8][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[8][0][2][2]">
                    <img height="350px" :src="playerCards[8][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '6'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[9][0][3][0]">
                    <img height="350px" :src="playerCards[9][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[9][0][1][1][0]">
                    <img height="350px" :src="playerCards[9][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateSilverholdMunitionsDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawSilverholdMunitionsConsidered1Player3')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawSilverholdMunitionsConsidered2Player3')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawSilverholdMunitionsConsidered3Player3')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addSilverholdMunitionsShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addSilverholdMunitionsShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardSilverholdMunitionsShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardSilverholdMunitionsShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardSilverholdMunitionsShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[9][0][2][0][0]">
                    <img height="350px" :src="playerCards[9][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[9][0][2][1]">
                    <img height="350px" :src="playerCards[9][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[9][0][2][2]">
                    <img height="350px" :src="playerCards[9][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '7'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[10][0][3][0]">
                    <img height="350px" :src="playerCards[10][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[10][0][1][1][0]">
                    <img height="350px" :src="playerCards[10][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateSpaceBazaarDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawSpaceBazaarConsidered1Player3')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawSpaceBazaarConsidered2Player3')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawSpaceBazaarConsidered3Player3')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addSpaceBazaarShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addSpaceBazaarShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardSpaceBazaarShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardSpaceBazaarShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardSpaceBazaarShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[10][0][2][0][0]">
                    <img height="350px" :src="playerCards[10][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[10][0][2][1]">
                    <img height="350px" :src="playerCards[10][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[10][0][2][2]">
                    <img height="350px" :src="playerCards[10][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div class="showAlliance">
                <p v-if="playerCards[21][1][1][0]">
                  <img height="350px" :src="playerCards[21][1][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawAlliance btn-lg btn-success" @click="giveManual('drawAlliance')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleAlliance btn-lg btn-danger" @click="giveManual('shuffleAlliance')">Shuffle</button> 
              </div>
              
              <div class="showBorder">
                <p v-if="playerCards[21][2][1][0]">
                  <img height="350px" :src="playerCards[21][2][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawBorder btn-lg btn-success" @click="giveManual('drawBorder')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleBorder btn-lg btn-danger" @click="giveManual('shuffleBorder')">Shuffle</button> 
              </div>

              <div class="showRim">
                <p v-if="playerCards[21][3][1][0]">
                  <img height="350px" :src="playerCards[21][3][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawRim btn-lg btn-success" @click="giveManual('drawRim')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleRim btn-lg btn-danger" @click="giveManual('shuffleRim')">Shuffle</button> 
              </div>

              <div class="showBounty">
                <p v-if="playerCards[21][4][1][0]">
                  <img height="350px" :src="playerCards[21][4][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawBounty btn-lg btn-success" @click="giveManual('drawBounty')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleBounty btn-lg btn-danger" @click="giveManual('shuffleBounty')">Shuffle</button> 
              </div>

              <div class="showMisbehave">
                <p v-if="playerCards[21][5][1][0]">
                  <img height="350px" :src="playerCards[21][5][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawMisbehave btn-lg btn-success" @click="giveManual('drawMisbehave')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleMisbehave btn-lg btn-danger" @click="giveManual('shuffleMisbehave')">Shuffle</button> 
              </div>

              <div class="showScenario">
                <p v-if="playerCards[23][0]">
                  <img height="1000px" :src="playerCards[23][0]" alt=""></p>
              </div>

              <div>
                <button width="200px" class="nextScenario btn-lg btn-success" @click="giveManual('nextScenario')">Next Scenario</button> 
              </div>
                
             

              <div class="moneyAmount">
                <p>Credits: {{ wallet3 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens3 }}</p>
              </div>

              <div class="goalTokensAdd">
                <div class="btn-group" role="group" aria-label="Basic example">
                  
                    <button class="btn-lg btn-success" @click="moveMoney1('goal3Add1')">+</button> 
                    <button class="btn-lg btn-danger" @click="moveMoney1('goal3Subtract1')">-</button> 
                  
                </div>
              </div>

              <div class="warrants">
                <p>Warrants: {{ warrant3 }}</p>
              </div>

              <div class="warrantsAdd">
                <div class="btn-group" role="group" aria-label="Basic example">
                  
                    <button class="btn-lg btn-success" @click="moveMoney1('warrant3Add1')">+</button> 
                    <button class="btn-lg btn-danger" @click="moveMoney1('warrant3Subtract1')">-</button> 
                  
                </div>
              </div>
              


              <div class="hundredCredits">
                <img v-bind:src="playerCards[22][0][0]"
                     v-on:click="moveMoney1('3add100')"
                     height="90px"/>
              </div>

              <div class="fiveHundred">
                <img v-bind:src="playerCards[22][1][0]"
                     v-on:click="moveMoney1('3add500')"
                     height="90px"/>
              </div>

              <div class="thousand">
                <img v-bind:src="playerCards[22][2][0]"
                     v-on:click="moveMoney1('3add1000')"
                     height="90px"/>
              </div>

              <div class="twoThousand">
                <img v-bind:src="playerCards[22][3][0]"
                     v-on:click="moveMoney1('3add2000')"
                     height="90px"/>
              </div>

              <div class="negativeHundredCredits">
                <img v-bind:src="playerCards[22][4][0]"
                     v-on:click="moveMoney1('3minus100')"
                     height="90px"/>
              </div>

              <div class="negativeFiveHundred">
                <img v-bind:src="playerCards[22][5][0]"
                     v-on:click="moveMoney1('3minus500')"
                     height="90px"/>
              </div>

              <div class="negativeThousand">
                <img v-bind:src="playerCards[22][6][0]"
                     v-on:click="moveMoney1('3minus1000')"
                     height="90px"/>
              </div>

              <div class="negativeTwoThousand">
                <img v-bind:src="playerCards[22][7][0]"
                     v-on:click="moveMoney1('3minus2000')"
                     height="90px"/>
              </div>
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>
    </div>


    <div class="masterPositionPlayer1">
      <div class="playerLabel">
        <p>Player 1</p>
        </div>
      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[1][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              
              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              
              
              
              <div class="img1">
                <p v-if="shipInv[1][0][0][0]"> 
                  <img height="500px" :src="shipCards[1][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[1][0][0][0]"
                     
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[1][0][1][0]"
                     
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[1][0][2][0]"
                     
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[1][0][3][0]"
                     
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[1][0][4][0]"
                     
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[1][0][5][0]"
                     
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[1][0][6][0]"
                     
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[1][0][7][0]"
                     
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[1][0][8][0]"
                     
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[1][0][9][0]"
                     
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[1][0][10][0]"
                     
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[1][0][11][0]"
                     
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[0][5][2][0]"> 
                  <img height="175px" :src="playerCards[0][5][2][0]" alt=""></p>
              </div>
              
              
              <div class="job1">
                <p v-if="playerCards[0][6][1][0]"> 
                  <img height="175px" :src="playerCards[0][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[0][6][1][0]"> 
                  <img height="175px" :src="playerCards[0][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[0][6][1][0]"> 
                  <img height="175px" :src="playerCards[0][6][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3h1">
                <p v-if="playerCards[0][0][1][0]">
                  <img height="350px" :src="playerCards[0][0][1][0]" alt="playerCards[0][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[0][0][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[0][1][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[0][2][0]"
                     
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[0][3][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[0][4][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[0][5][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[0][6][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[0][7][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[0][8][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[0][9][0]"
                     
                     height="45px"/>
              </div>
              
              
              <div class="p3h2">
                <p v-if="playerCards[0][0][2][0]"> 
                  <img height="350px" :src="playerCards[0][0][2][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              
              <div class="p3h3">
                <p v-if="playerCards[0][0][3][0]"> 
                  <img height="350px" :src="playerCards[0][0][3][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h4">
                <p v-if="playerCards[0][0][4][0]"> 
                  <img height="350px" :src="playerCards[0][0][4][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h5">
                <p v-if="playerCards[0][0][5][0]"> 
                  <img height="350px" :src="playerCards[0][0][5][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h6">
                <p v-if="playerCards[0][0][6][0]"> 
                  <img height="350px" :src="playerCards[0][0][6][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h7">
                <p v-if="playerCards[0][0][7][0]"> 
                  <img height="350px" :src="playerCards[0][0][7][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h8">
                <p v-if="playerCards[0][0][8][0]"> 
                  <img height="350px" :src="playerCards[0][0][8][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h9">
                <p v-if="playerCards[0][0][9][0]"> 
                  <img height="350px" :src="playerCards[0][0][9][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h10">
                <p v-if="playerCards[0][0][10][0]"> 
                  <img height="350px" :src="playerCards[0][0][10][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              
              <div class="p3i1">
                <p v-if="playerCards[0][2][1][0]">
                  <img height="350px" :src="playerCards[0][2][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3i2">
                <p v-if="playerCards[0][2][2][0]">
                  <img height="350px" :src="playerCards[0][2][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3i3">
                <p v-if="playerCards[0][2][3][0]">
                  <img height="350px" :src="playerCards[0][2][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3i4">
                <p v-if="playerCards[0][2][4][0]">
                  <img height="350px" :src="playerCards[0][2][4][0]" alt=""></p>
              </div>
              
              
              <div class="p3i5">
                <p v-if="playerCards[0][2][5][0]">
                  <img height="350px" :src="playerCards[0][2][5][0]" alt=""></p>
              </div>
              
              
              <div class="p3i6">
                <p v-if="playerCards[0][2][6][0]">
                  <img height="350px" :src="playerCards[0][2][6][0]" alt=""></p>
              </div>
              
              
              <div class="p3i7">
                <p v-if="playerCards[0][2][7][0]">
                  <img height="350px" :src="playerCards[0][2][7][0]" alt=""></p>
              </div>
              
              
              <div class="p3i8">
                <p v-if="playerCards[0][2][8][0]">
                  <img height="350px" :src="playerCards[0][2][8][0]" alt=""></p>
              </div>
              
              
              <div class="p3i9">
                <p v-if="playerCards[0][2][9][0]">
                  <img height="350px" :src="playerCards[0][2][9][0]" alt=""></p>
              </div>
              
              
              <div class="p3i10">
                <p v-if="playerCards[0][2][10][0]">
                  <img height="350px" :src="playerCards[0][2][10][0]" alt=""></p>
              </div>
              
              
              <div class="p3su1">
                <p v-if="playerCards[0][7][1][0]">
                  <img height="350px" :src="playerCards[0][7][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3su2">
                <p v-if="playerCards[0][3][1][0]">
                  <img height="350px" :src="playerCards[0][3][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3su3">
                <p v-if="playerCards[0][3][2][0]">
                  <img height="350px" :src="playerCards[0][3][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3su4">
                <p v-if="playerCards[0][3][3][0]">
                  <img height="350px" :src="playerCards[0][3][4][0]" alt=""></p>
              </div>
              
              
              <div class="moneyAmount">
                <p>Credits: {{ wallet1 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens1 }}</p>
              </div>

              
              <div class="warrants">
                <p>Warrants: {{ warrant1 }}</p>
              </div>

              
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>


    </div>  



    <div class="masterPositionPlayer2">
      <div class="playerLabel">
        <p>Player 2</p>
        </div>
      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[2][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              
              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              
              
              
              <div class="img1">
                <p v-if="shipInv[2][0][0][0]"> 
                  <img height="500px" :src="shipCards[2][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[2][0][0][0]"
                     
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[2][0][1][0]"
                     
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[2][0][2][0]"
                     
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[2][0][3][0]"
                     
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[2][0][4][0]"
                     
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[2][0][5][0]"
                     
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[2][0][6][0]"
                     
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[2][0][7][0]"
                     
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[2][0][8][0]"
                     
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[2][0][9][0]"
                     
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[2][0][10][0]"
                     
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[2][0][11][0]"
                     
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[1][5][2][0]"> 
                  <img height="175px" :src="playerCards[1][5][2][0]" alt=""></p>
              </div>
              
              
              <div class="job1">
                <p v-if="playerCards[1][6][1][0]"> 
                  <img height="175px" :src="playerCards[1][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[1][6][1][0]"> 
                  <img height="175px" :src="playerCards[1][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[1][6][1][0]"> 
                  <img height="175px" :src="playerCards[1][6][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3h1">
                <p v-if="playerCards[1][0][1][0]">
                  <img height="350px" :src="playerCards[1][0][1][0]" alt="playerCards[1][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[1][0][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[1][1][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[1][2][0]"
                     
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[1][3][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[1][4][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[1][5][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[1][6][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[1][7][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[1][8][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[1][9][0]"
                     
                     height="45px"/>
              </div>
              
              
              <div class="p3h2">
                <p v-if="playerCards[1][0][2][0]"> 
                  <img height="350px" :src="playerCards[1][0][2][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              
              <div class="p3h3">
                <p v-if="playerCards[1][0][3][0]"> 
                  <img height="350px" :src="playerCards[1][0][3][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h4">
                <p v-if="playerCards[1][0][4][0]"> 
                  <img height="350px" :src="playerCards[1][0][4][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h5">
                <p v-if="playerCards[1][0][5][0]"> 
                  <img height="350px" :src="playerCards[1][0][5][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h6">
                <p v-if="playerCards[1][0][6][0]"> 
                  <img height="350px" :src="playerCards[1][0][6][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h7">
                <p v-if="playerCards[1][0][7][0]"> 
                  <img height="350px" :src="playerCards[1][0][7][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h8">
                <p v-if="playerCards[1][0][8][0]"> 
                  <img height="350px" :src="playerCards[1][0][8][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h9">
                <p v-if="playerCards[1][0][9][0]"> 
                  <img height="350px" :src="playerCards[1][0][9][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h10">
                <p v-if="playerCards[1][0][10][0]"> 
                  <img height="350px" :src="playerCards[1][0][10][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              
              <div class="p3i1">
                <p v-if="playerCards[1][2][1][0]">
                  <img height="350px" :src="playerCards[1][2][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3i2">
                <p v-if="playerCards[1][2][2][0]">
                  <img height="350px" :src="playerCards[1][2][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3i3">
                <p v-if="playerCards[1][2][3][0]">
                  <img height="350px" :src="playerCards[1][2][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3i4">
                <p v-if="playerCards[1][2][4][0]">
                  <img height="350px" :src="playerCards[1][2][4][0]" alt=""></p>
              </div>
              
              
              <div class="p3i5">
                <p v-if="playerCards[1][2][5][0]">
                  <img height="350px" :src="playerCards[1][2][5][0]" alt=""></p>
              </div>
              
              
              <div class="p3i6">
                <p v-if="playerCards[1][2][6][0]">
                  <img height="350px" :src="playerCards[1][2][6][0]" alt=""></p>
              </div>
              
              
              <div class="p3i7">
                <p v-if="playerCards[1][2][7][0]">
                  <img height="350px" :src="playerCards[1][2][7][0]" alt=""></p>
              </div>
              
              
              <div class="p3i8">
                <p v-if="playerCards[1][2][8][0]">
                  <img height="350px" :src="playerCards[1][2][8][0]" alt=""></p>
              </div>
              
              
              <div class="p3i9">
                <p v-if="playerCards[1][2][9][0]">
                  <img height="350px" :src="playerCards[1][2][9][0]" alt=""></p>
              </div>
              
              
              <div class="p3i10">
                <p v-if="playerCards[1][2][10][0]">
                  <img height="350px" :src="playerCards[1][2][10][0]" alt=""></p>
              </div>
              
              
              <div class="p3su1">
                <p v-if="playerCards[1][7][1][0]">
                  <img height="350px" :src="playerCards[1][7][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3su2">
                <p v-if="playerCards[1][3][1][0]">
                  <img height="350px" :src="playerCards[1][3][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3su3">
                <p v-if="playerCards[1][3][2][0]">
                  <img height="350px" :src="playerCards[1][3][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3su4">
                <p v-if="playerCards[1][3][3][0]">
                  <img height="350px" :src="playerCards[1][3][4][0]" alt=""></p>
              </div>
              
              
              <div class="moneyAmount">
                <p>Credits: {{ wallet2 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens2 }}</p>
              </div>

              
              <div class="warrants">
                <p>Warrants: {{ warrant2 }}</p>
              </div>

              
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>


</div>

    <div class="masterPositionPlayer3Altered">
      <div class="playerLabel">
        <p>Player 4</p>
        </div>
      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[4][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              
              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              
              
              
          <div class="img1">  
                <p v-if="shipInv[4][0][0][0]"> 
                  <img height="500px" :src="shipCards[4][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[4][0][0][0]"
                     
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[4][0][1][0]"
                     
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[4][0][2][0]"
                     
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[4][0][3][0]"
                     
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[4][0][4][0]"
                     
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[4][0][5][0]"
                     
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[4][0][6][0]"
                     
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[4][0][7][0]"
                     
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[4][0][8][0]"
                     
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[4][0][9][0]"
                     
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[4][0][10][0]"
                     
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[4][0][11][0]"
                     
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[3][5][2][0]"> 
                  <img height="175px" :src="playerCards[3][5][2][0]" alt=""></p>
              </div>
              
              
              <div class="job1">
                <p v-if="playerCards[3][6][1][0]"> 
                  <img height="175px" :src="playerCards[3][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[3][6][1][0]"> 
                  <img height="175px" :src="playerCards[3][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[3][6][1][0]"> 
                  <img height="175px" :src="playerCards[3][6][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3h1">
                <p v-if="playerCards[3][0][1][0]">
                  <img height="350px" :src="playerCards[3][0][1][0]" alt="playerCards[3][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[3][0][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[3][1][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[3][2][0]"
                     
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[3][3][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[3][4][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[3][5][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[3][6][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[3][7][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[3][8][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[3][9][0]"
                     
                     height="45px"/>
              </div>
              
              
              <div class="p3h2">
                <p v-if="playerCards[3][0][2][0]"> 
                  <img height="350px" :src="playerCards[3][0][2][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              
              <div class="p3h3">
                <p v-if="playerCards[3][0][3][0]"> 
                  <img height="350px" :src="playerCards[3][0][3][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h4">
                <p v-if="playerCards[3][0][4][0]"> 
                  <img height="350px" :src="playerCards[3][0][4][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h5">
                <p v-if="playerCards[3][0][5][0]"> 
                  <img height="350px" :src="playerCards[3][0][5][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h6">
                <p v-if="playerCards[3][0][6][0]"> 
                  <img height="350px" :src="playerCards[3][0][6][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h7">
                <p v-if="playerCards[3][0][7][0]"> 
                  <img height="350px" :src="playerCards[3][0][7][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h8">
                <p v-if="playerCards[3][0][8][0]"> 
                  <img height="350px" :src="playerCards[3][0][8][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h9">
                <p v-if="playerCards[3][0][9][0]"> 
                  <img height="350px" :src="playerCards[3][0][9][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              <div class="p3h10">
                <p v-if="playerCards[3][0][10][0]"> 
                  <img height="350px" :src="playerCards[3][0][10][0]" alt="playerCards[3][0]"></p>
              </div>
              
              
              
              <div class="p3i1">
                <p v-if="playerCards[3][2][1][0]">
                  <img height="350px" :src="playerCards[3][2][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3i2">
                <p v-if="playerCards[3][2][2][0]">
                  <img height="350px" :src="playerCards[3][2][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3i3">
                <p v-if="playerCards[3][2][3][0]">
                  <img height="350px" :src="playerCards[3][2][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3i4">
                <p v-if="playerCards[3][2][4][0]">
                  <img height="350px" :src="playerCards[3][2][4][0]" alt=""></p>
              </div>
              
              
              <div class="p3i5">
                <p v-if="playerCards[3][2][5][0]">
                  <img height="350px" :src="playerCards[3][2][5][0]" alt=""></p>
              </div>
              
              
              <div class="p3i6">
                <p v-if="playerCards[3][2][6][0]">
                  <img height="350px" :src="playerCards[3][2][6][0]" alt=""></p>
              </div>
              
              
              <div class="p3i7">
                <p v-if="playerCards[3][2][7][0]">
                  <img height="350px" :src="playerCards[3][2][7][0]" alt=""></p>
              </div>
              
              
              <div class="p3i8">
                <p v-if="playerCards[3][2][8][0]">
                  <img height="350px" :src="playerCards[3][2][8][0]" alt=""></p>
              </div>
              
              
              <div class="p3i9">
                <p v-if="playerCards[3][2][9][0]">
                  <img height="350px" :src="playerCards[3][2][9][0]" alt=""></p>
              </div>
              
              
              <div class="p3i10">
                <p v-if="playerCards[3][2][10][0]">
                  <img height="350px" :src="playerCards[3][2][10][0]" alt=""></p>
              </div>
              
              
              <div class="p3su1">
                <p v-if="playerCards[3][7][1][0]">
                  <img height="350px" :src="playerCards[3][7][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3su2">
                <p v-if="playerCards[3][3][1][0]">
                  <img height="350px" :src="playerCards[3][3][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3su3">
                <p v-if="playerCards[3][3][2][0]">
                  <img height="350px" :src="playerCards[3][3][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3su4">
                <p v-if="playerCards[3][3][3][0]">
                  <img height="350px" :src="playerCards[3][3][4][0]" alt=""></p>
              </div>
              
              
              <div class="moneyAmount">
                <p>Credits: {{ wallet4 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens4 }}</p>
              </div>

              
              <div class="warrants">
                <p>Warrants: {{ warrant4 }}</p>
              </div>

              
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>


    </div>


    
  </div>
    
    <div v-else-if="player === '4'">

<div v-if ="player === 'chatable'">
      <div v-if="ready">
        <h1>READY</h1>
        <div class="boxPosition">
          <div class="row">
            <div class="col-md-4 col-lg-6 offset-lg-3 offset-md-4">
              
              <h4>{{name}}</h4>          
              <h5>{{connectionCount}} Connected, {{online.length}} Online</h5>
              
              <p v-for="item in info" :key="item">
                <small>{{item.name}} {{item.type}}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    <div v-if="player === 'chat-box'">
      <div class="row">
        <div class="col">
          <form @submit.prevent="setName" class="mt-4">
            <div class="form-group row">
              <input type="text" class="form-control col" v-model="name" placeholder="Set Your Name First">
              <input type="submit" value="Add" class="btn btn-sm btn-info ml-1 col-2">
            </div>
          </form>
        </div>
      </div>
    </div>

    
    
    <div class="masterPosition">
      <div class="scrollDown">
        <h3>Scroll Down to use Game Cards</h3>
        <h3>Zoom Out to see Full Board</h3>
      </div>
      
      <div class="movingButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          <button class="btn btn-secondary btn-lg" v-on:click="move4('keepPosition4')">Add Piece</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move4('left4')">Left</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move4('right4')">Right</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move4('up4')">Up</button>
          <button class="btn btn-secondary btn-lg" v-on:click="move4('down4')">Down</button>
          
        </div>
        <h3>Player Ship</h3>
      </div>

      <div class="allianceButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          <button class="btn btn-secondary btn-lg" v-on:click="move5('keepPosition5')">Add Piece</button>
   
            <button class="btn btn-secondary btn-lg" v-on:click="move5('left5')">Left</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move5('right5')">Right</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move5('up5')">Up</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move5('down5')">Down</button>
          
        </div>
        <h3>Alliance Base</h3>
      </div>

      <div class="cruiserButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          <button class="btn btn-secondary btn-lg" v-on:click="move7('keepPosition7')">Add Piece</button>
            
            <button class="btn btn-secondary btn-lg" v-on:click="move7('left7')">Left</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move7('right7')">Right</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move7('up7')">Up</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move7('down7')">Down</button>
          
        </div>
        <h3>Reaver Ship</h3>
      </div>

      <div class="reaverButtons">
        <div class="btn-group" role="group" aria-label="Basic example">

          
            <button class="btn btn-secondary btn-lg" v-on:click="move6('keepPosition6')">Add Piece</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('left6')">Left</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('right6')">Right</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('up6')">Up</button>
            <button class="btn btn-secondary btn-lg" v-on:click="move6('down6')">Down</button>
          
        </div>
        <h3>Cruiser</h3>
      </div>
      
      
        <div class="playerNumber">
          <p>You Are Player {{player}}!</p>
        </div>

      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[4][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              <div class="rollDice">
                <p> {{ shipCards2[0]  }}</p>
              </div>

              <div class="diceBox">
                <img src="./dice_box.jpg"
                     height="100px"/>
              </div>

              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              <div>
                <button width="200px" class="diceButton btn btn-success btn-sm" @click="chosenShip2('rollDice')">Roll Dice</button>
              </div>

              <div class="drawJobLabel">
                <h2>Click on Job Card to Draw</h2>
              </div>
              
              <div class="drawJob1">
                <img v-bind:src="playerCards[20][0]"
                     v-on:click="giveManual('Player4DrawAmnonDuul')"
                     height="175px"/>
              </div>
              
              <div class="drawJob2">
                <img v-bind:src="playerCards[20][1]"
                     v-on:click="giveManual('Player4DrawBadger')"
                     height="175px"/>
              </div>
              
              <div class="drawJob3">
                <img v-bind:src="playerCards[20][2]"
                     v-on:click="giveManual('Player4DrawFantyMingo')"
                     height="175px"/>
              </div>
              
              <div class="drawJob4">
                <img v-bind:src="playerCards[20][3]"
                     v-on:click="giveManual('Player4DrawHarken')"
                     height="175px"/>
              </div>
              
              <div class="drawJob5">
                <img v-bind:src="playerCards[20][4]"
                     v-on:click="giveManual('Player4DrawHarrow')"
                     height="175px"/>
              </div>
              
              <div class="drawJob6">
                <img v-bind:src="playerCards[20][5]"
                     v-on:click="giveManual('Player4DrawHiggins')"
                     height="175px"/>
              </div>
              
              <div class="drawJob7">
                <img v-bind:src="playerCards[20][6]"
                     v-on:click="giveManual('Player4DrawNiska')"
                     height="175px"/>
              </div>
              
              <div class="drawJob8">
                <img v-bind:src="playerCards[20][7]"
                     v-on:click="giveManual('Player4DrawPatience')"
                     height="175px"/>
              </div>
              
              
              <div class="img1">
                <p v-if="shipCards[4][0][0][0]"> 
                  <img height="500px" :src="shipCards[4][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[4][0][0][0]"
                     v-on:click="supply('4box1')"
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[4][0][1][0]"
                     v-on:click="supply('4box2')"
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[4][0][2][0]"
                     v-on:click="supply('4box3')"
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[4][0][3][0]"
                     v-on:click="supply('4box4')"
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[4][0][4][0]"
                     v-on:click="supply('4box5')"
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[4][0][5][0]"
                     v-on:click="supply('4box6')"
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[4][0][6][0]"
                     v-on:click="supply('4box7')"
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[4][0][7][0]"
                     v-on:click="supply('4box8')"
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[4][0][8][0]"
                     v-on:click="supply('4box9')"
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[4][0][9][0]"
                     v-on:click="supply('4box10')"
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[4][0][10][0]"
                     v-on:click="supply('4box11')"
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[4][0][11][0]"
                     v-on:click="supply('4box12')"
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[3][5][2][0]"> 
                  <img height="175px" :src="playerCards[3][5][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="rotateJobs btn btn-success btn-sm"
                        @click="giveManual('finishedJobRotatePlayer4')">Next</button>
              </div>

              <div class="job1">
                <p v-if="playerCards[3][6][1][0]"> 
                  <img height="175px" :src="playerCards[3][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[3][6][1][0]"> 
                  <img height="175px" :src="playerCards[3][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[3][6][1][0]"> 
                  <img height="175px" :src="playerCards[3][6][3][0]" alt=""></p>
              </div>
              
              <div class="jobHidden1">
                <p v-if="playerCards[3][4][1][0]"> 
                  <img height="175px" :src="playerCards[3][4][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h1StartJob btn btn-success btn-sm" @click="giveManual('startJobP4C1')">Start Job</button>
              </div>

              <div>
                <button width="200px" class="p3h2StartJob btn btn-success btn-sm" @click="giveManual('startJobP4C2')">Start Job</button>
              </div>


              <div>
                <button width="200px" class="p3h3StartJob btn btn-success btn-sm" @click="giveManual('startJobP4C3')">Start Job</button>
              </div>

              <div>
                <button width="200px" class="p3h1JobComplete btn btn-success btn-sm" @click="giveManual('p4FinishedJobs1')">Complete</button>
              </div>
              

              <div>
                <button width="200px" class="p3h1DiscardJobStarted btn btn-danger btn-sm" @click="giveManual('p4DiscardJobsStarted1')">Discard</button>
              </div>


              <div>
                <button width="200px" class="p3h2DiscardJobStarted btn btn-danger btn-sm" @click="giveManual('p4DiscardJobsStarted2')">Discard</button>
              </div>


              <div>
                <button width="200px" class="p3h3DiscardJobStarted btn btn-danger btn-sm" @click="giveManual('p4DiscardJobsStarted3')">Discard</button>
              </div>
              
              
              <div>
                <button width="200px" class="p3h1DiscardJob btn btn-danger btn-sm" @click="giveManual('p4DiscardJobs1')">Discard</button>
              </div>
              
              <div class="jobHidden2">
                <p v-if="playerCards[3][4][1][0]"> 
                  <img height="175px" :src="playerCards[3][4][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h2JobComplete btn btn-success btn-sm" @click="giveManual('p4FinishedJobs2')">Complete</button>
              </div>
              
              
              <div>
                <button width="200px" class="p3h2DiscardJob btn btn-danger btn-sm" @click="giveManual('p4DiscardJobs2')">Discard</button>
              </div>
              
              <div class="jobHidden3">
                <p v-if="playerCards[3][4][1][0]"> 
                  <img height="175px" :src="playerCards[3][4][3][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h3JobComplete btn btn-success btn-sm" @click="giveManual('p4FinishedJobs3')">Complete</button>
              </div>
              
              
              <div>
                <button width="200px" class="p3h3DiscardJob btn btn-danger btn-sm" @click="giveManual('p4DiscardJobs3')">Discard</button>
              </div>
              
              
              
              
              
              <div class="p3h1">
                <p v-if="playerCards[3][0][1][0]">
                  <img height="350px" :src="playerCards[3][0][1][0]" alt="playerCards[0][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[3][0][0]"
                     v-on:click="chosenMood('p4c1ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[3][1][0]"
                     v-on:click="chosenMood('p4c2ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[3][2][0]"
                     v-on:click="chosenMood('p4c3ChangeMood')"
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[3][3][0]"
                     v-on:click="chosenMood('p4c4ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[3][4][0]"
                     v-on:click="chosenMood('p4c5ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[3][5][0]"
                     v-on:click="chosenMood('p4c6ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[3][6][0]"
                     v-on:click="chosenMood('p4c7ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[3][7][0]"
                     v-on:click="chosenMood('p4c8ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[3][8][0]"
                     v-on:click="chosenMood('p4c9ChangeMood')"
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[3][9][0]"
                     v-on:click="chosenMood('p4c10ChangeMood')"
                     height="45px"/>
              </div>
              
              <div class="p3h1Switch2">
                <button width="200px" class="3give1"  @click="giveManual('p4Switch1To2')">&#11138;</button>
              </div>

              <div class="p3priv1Switch2">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchPriv1To2')">&#11138;</button>
              </div>

              <div class="p3priv2Switch3">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchPriv2To3')">&#11138;</button>
              </div>

              <div class="p3priv3Switch4">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchPriv3To4')">&#11138;</button>
              </div>
              
              <div class="p3priv4Switch5">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchPriv4To5')">&#11138;</button>
              </div>

              <div class="p3priv5Switch6">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchPriv5To6')">&#11138;</button>
              </div>
              
              <div class="p3priv6Switch7">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchPriv6To7')">&#11138;</button>
              </div>

              <div class="p3priv7Switch8">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchPriv7To8')">&#11138;</button>
              </div>

              <div class="p3priv8Switch9">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchPriv8To9')">&#11138;</button>
              </div>

              <div class="p3priv9Switch10">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchPriv9To10')">&#11138;</button>
              </div>

              
              <div>
                <button width="200px" class="p3h1GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p4CrewC1P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p4CrewC1P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP4Crew btn btn-light btn-sm"  @click="giveManual('p4CrewC1P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardCrew btn btn-danger btn-sm" @click="giveManual('p4DiscardCrew1')">Discard</button>
              </div>
              
              <div class="p3h2">
                <p v-if="playerCards[3][0][2][0]"> 
                  <img height="350px" :src="playerCards[3][0][2][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h2Switch3">
                <button width="200px" class="3give1"  @click="giveManual('p4Switch2To3')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p4CrewC2P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p4CrewC2P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP4Crew btn btn-light btn-sm"  @click="giveManual('p4CrewC2P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardCrew btn btn-danger btn-sm" @click="giveManual('p4DiscardCrew2')">Discard</button>
              </div>
              
              <div class="p3h3">
                <p v-if="playerCards[3][0][3][0]"> 
                  <img height="350px" :src="playerCards[3][0][3][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h3Switch4">
                <button width="200px" class="3give1"  @click="giveManual('p4Switch3To4')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p4CrewC3P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p4CrewC3P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP4Crew btn btn-light btn-sm"  @click="giveManual('p4CrewC3P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardCrew btn btn-danger btn-sm" @click="giveManual('p4DiscardCrew3')">Discard</button>
              </div>
              
              <div class="p3h4">
                <p v-if="playerCards[3][0][4][0]"> 
                  <img height="350px" :src="playerCards[3][0][4][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h4Switch5">
                <button width="200px" class="3give1"  @click="giveManual('p4Switch4To5')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p4CrewC4P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p4CrewC4P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP4Crew btn btn-light btn-sm"  @click="giveManual('p4CrewC4P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardCrew btn btn-danger btn-sm" @click="giveManual('p4DiscardCrew4')">Discard</button>
              </div>
              
              <div class="p3h5">
                <p v-if="playerCards[3][0][5][0]"> 
                  <img height="350px" :src="playerCards[3][0][5][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h5Switch6">
                <button width="200px" class="3give1"  @click="giveManual('p4Switch5To6')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p4CrewC5P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p4CrewC5P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP4Crew btn btn-light btn-sm"  @click="giveManual('p4CrewC5P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5DiscardCrew btn btn-danger btn-sm" @click="giveManual('p4DiscardCrew5')">Discard</button>
              </div>
              
              <div class="p3h6">
                <p v-if="playerCards[3][0][6][0]"> 
                  <img height="350px" :src="playerCards[3][0][6][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h6Switch7">
                <button width="200px" class="3give1"  @click="giveManual('p4Switch6To7')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p4CrewC6P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p4CrewC6P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP4Crew btn btn-light btn-sm"  @click="giveManual('p4CrewC6P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6DiscardCrew btn btn-danger btn-sm" @click="giveManual('p4DiscardCrew6')">Discard</button>
              </div>
              
              <div class="p3h7">
                <p v-if="playerCards[3][0][7][0]"> 
                  <img height="350px" :src="playerCards[3][0][7][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h7Switch8">
                <button width="200px" class="3give1"  @click="giveManual('p4Switch7To8')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p4CrewC7P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p4CrewC7P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP4Crew btn btn-light btn-sm"  @click="giveManual('p4CrewC7P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7DiscardCrew btn btn-danger btn-sm" @click="giveManual('p4DiscardCrew7')">Discard</button>
              </div>
              
              <div class="p3h8">
                <p v-if="playerCards[3][0][8][0]"> 
                  <img height="350px" :src="playerCards[3][0][8][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h8Switch9">
                <button width="200px" class="3give1"  @click="giveManual('p4Switch8To9')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p4CrewC8P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p4CrewC8P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP4Crew btn btn-light btn-sm"  @click="giveManual('p4CrewC8P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8DiscardCrew btn btn-danger btn-sm" @click="giveManual('p4DiscardCrew8')">Discard</button>
              </div>
              
              <div class="p3h9">
                <p v-if="playerCards[3][0][9][0]"> 
                  <img height="350px" :src="playerCards[3][0][9][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div class="p3h9Switch10">
                <button width="200px" class="3give1"  @click="giveManual('p4Switch9To10')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p4CrewC9P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p4CrewC9P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP4Crew btn btn-light btn-sm"  @click="giveManual('p4CrewC9P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9DiscardCrew btn btn-danger btn-sm" @click="giveManual('p4DiscardCrew9')">Discard</button>
              </div>
              
              <div class="p3h10">
                <p v-if="playerCards[3][0][10][0]"> 
                  <img height="350px" :src="playerCards[3][0][10][0]" alt="playerCards[0][0]"></p>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP1Crew btn btn-primary btn-sm"  @click="giveManual('p4CrewC10P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP2Crew btn btn-success btn-sm"  @click="giveManual('p4CrewC10P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP4Crew btn btn-light btn-sm"  @click="giveManual('p4CrewC10P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10DiscardCrew btn btn-danger btn-sm" @click="giveManual('p4DiscardCrew10')">Discard</button>
              </div>
              
              <div class="p3pr1">
                <p v-if="playerCards[3][1][1][0]">
                  <img height="350px" :src="playerCards[3][1][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr1SwitchDown btn btn-info btn-sm" @click="giveManual('p4Priv1SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p4DiscardPrivate1')">Discard</button>
              </div>
              
              <div class="p3pr2">
                <p v-if="playerCards[3][1][2][0]">
                  <img height="350px" :src="playerCards[3][1][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr2SwitchDown btn btn-info btn-sm" @click="giveManual('p4Priv2SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p4DiscardPrivate2')">Discard</button>
              </div>
              
              <div class="p3pr3">
                <p v-if="playerCards[3][1][3][0]">
                  <img height="350px" :src="playerCards[3][1][3][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr3SwitchDown btn btn-info btn-sm" @click="giveManual('p4Priv3SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p4DiscardPrivate3')">Discard</button>
              </div>
              
              <div class="p3pr4">
                <p v-if="playerCards[3][1][4][0]">
                  <img height="350px" :src="playerCards[3][1][4][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr4SwitchDown btn btn-info btn-sm" @click="giveManual('p4Priv4SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p4DiscardPrivate4')">Discard</button>
              </div>
              
              <div class="p3pr5">
                <p v-if="playerCards[3][1][5][0]">
                  <img height="350px" :src="playerCards[3][1][5][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr5SwitchDown btn btn-info btn-sm" @click="giveManual('p4Priv5SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p4DiscardPrivate5')">Discard</button>
              </div>
              
              <div class="p3pr6">
                <p v-if="playerCards[3][1][6][0]">
                  <img height="350px" :src="playerCards[3][1][6][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr6SwitchDown btn btn-info btn-sm" @click="giveManual('p4Priv6SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p4DiscardPrivate6')">Discard</button>
              </div>
              
              <div class="p3pr7">
                <p v-if="playerCards[3][1][7][0]">
                  <img height="350px" :src="playerCards[3][1][7][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr7SwitchDown btn btn-info btn-sm" @click="giveManual('p4Priv7SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p4DiscardPrivate7')">Discard</button>
              </div>
              
              <div class="p3pr8">
                <p v-if="playerCards[3][1][8][0]">
                  <img height="350px" :src="playerCards[3][1][8][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr8SwitchDown btn btn-info btn-sm" @click="giveManual('p4Priv8SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p4DiscardPrivate8')">Discard</button>
              </div>
              
              <div class="p3pr9">
                <p v-if="playerCards[3][1][9][0]">
                  <img height="350px" :src="playerCards[3][1][9][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr9SwitchDown btn btn-info btn-sm" @click="giveManual('p4Priv9SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p4DiscardPrivate9')">Discard</button>
              </div>
              
              <div class="p3pr10">
                <p v-if="playerCards[3][1][10][0]">
                  <img height="350px" :src="playerCards[3][1][10][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3pr10SwitchDown btn btn-info btn-sm" @click="giveManual('p4Priv10SwitchMain')">&#129071;    Rotate Down    &#129071;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10DiscardPrivate btn btn-danger btn-sm" @click="giveManual('p4DiscardPrivate10')">Discard</button>
              </div>
              
              <div class="p3i1">
                <p v-if="playerCards[3][2][1][0]">
                  <img height="350px" :src="playerCards[3][2][1][0]" alt=""></p>
              </div>
              
              <div class="p3i1Switch2">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchItems1To2')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p4ItemsC1P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP2Items btn btn-success btn-sm"  @click="giveManual('p4ItemsC1P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1GiveP4Items btn btn-light btn-sm"  @click="giveManual('p4ItemsC1P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardItems btn btn-danger btn-sm" @click="giveManual('p4DiscardItems1')">Discard</button>
              </div>
              
              <div class="p3i2">
                <p v-if="playerCards[3][2][2][0]">
                  <img height="350px" :src="playerCards[3][2][2][0]" alt=""></p>
              </div>
              
              <div class="p3i2Switch3">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchItems2To3')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p4ItemsC2P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP2Items btn btn-success btn-sm"  @click="giveManual('p4ItemsC2P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2GiveP4Items btn btn-light btn-sm"  @click="giveManual('p4ItemsC2P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardItems btn btn-danger btn-sm" @click="giveManual('p4DiscardItems2')">Discard</button>
              </div>
              
              <div class="p3i3">
                <p v-if="playerCards[3][2][3][0]">
                  <img height="350px" :src="playerCards[3][2][3][0]" alt=""></p>
              </div>
              
              <div class="p3i3Switch4">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchItems3To4')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p4ItemsC3P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP2Items btn btn-success btn-sm"  @click="giveManual('p4ItemsC3P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3GiveP4Items btn btn-light btn-sm"  @click="giveManual('p4ItemsC3P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardItems btn btn-danger btn-sm" @click="giveManual('p4DiscardItems3')">Discard</button>
              </div>
              
              <div class="p3i4">
                <p v-if="playerCards[3][2][4][0]">
                  <img height="350px" :src="playerCards[3][2][4][0]" alt=""></p>
              </div>
              
              <div class="p3i4Switch5">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchItems4To5')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p4ItemsC4P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP2Items btn btn-success btn-sm"  @click="giveManual('p4ItemsC4P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4GiveP4Items btn btn-light btn-sm"  @click="giveManual('p4ItemsC4P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardItems btn btn-danger btn-sm" @click="giveManual('p4DiscardItems4')">Discard</button>
              </div>
              
              <div class="p3i5">
                <p v-if="playerCards[3][2][5][0]">
                  <img height="350px" :src="playerCards[3][2][5][0]" alt=""></p>
              </div>
              
              <div class="p3i5Switch6">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchItems5To6')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p4ItemsC5P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP2Items btn btn-success btn-sm"  @click="giveManual('p4ItemsC5P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5GiveP4Items btn btn-light btn-sm"  @click="giveManual('p4ItemsC5P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h5DiscardItems btn btn-danger btn-sm" @click="giveManual('p4DiscardItems5')">Discard</button>
              </div>
              
              <div class="p3i6">
                <p v-if="playerCards[3][2][6][0]">
                  <img height="350px" :src="playerCards[3][2][6][0]" alt=""></p>
              </div>
              
              <div class="p3i6Switch7">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchItems6To7')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p4ItemsC6P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP2Items btn btn-success btn-sm"  @click="giveManual('p4ItemsC6P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6GiveP4Items btn btn-light btn-sm"  @click="giveManual('p4ItemsC6P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h6DiscardItems btn btn-danger btn-sm" @click="giveManual('p4DiscardItems6')">Discard</button>
              </div>
              
              <div class="p3i7">
                <p v-if="playerCards[3][2][7][0]">
                  <img height="350px" :src="playerCards[3][2][7][0]" alt=""></p>
              </div>
              
              <div class="p3i7Switch8">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchItems7To8')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px"
                        class="p3h7GiveP1Items btn btn-primary btn-sm"
                        @click="giveManual('p4ItemsC7P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP2Items btn btn-success btn-sm"  @click="giveManual('p4ItemsC7P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7GiveP4Items btn btn-light btn-sm"  @click="giveManual('p4ItemsC7P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h7DiscardItems btn btn-danger btn-sm" @click="giveManual('p4DiscardItems7')">Discard</button>
              </div>
              
              <div class="p3i8">
                <p v-if="playerCards[3][2][8][0]">
                  <img height="350px" :src="playerCards[3][2][8][0]" alt=""></p>
              </div>
              
              <div class="p3i8Switch9">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchItems8To9')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p4ItemsC8P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP2Items btn btn-success btn-sm"  @click="giveManual('p4ItemsC8P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8GiveP4Items btn btn-light btn-sm"  @click="giveManual('p4ItemsC8P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h8DiscardItems btn btn-danger btn-sm" @click="giveManual('p4DiscardItems8')">Discard</button>
              </div>
              
              <div class="p3i9">
                <p v-if="playerCards[3][2][9][0]">
                  <img height="350px" :src="playerCards[3][2][9][0]" alt=""></p>
              </div>
              
              <div class="p3i9Switch10">
                <button width="200px" class="3give1"  @click="giveManual('p4SwitchItems9To10')">&#11138;</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p4ItemsC9P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP2Items btn btn-success btn-sm"  @click="giveManual('p4ItemsC9P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9GiveP4Items btn btn-light btn-sm"  @click="giveManual('p4ItemsC9P4')">Give P3</button>
              </div>
              
              <div>
                <button width="200px" class="p3h9DiscardItems btn btn-danger btn-sm" @click="giveManual('p4DiscardItems9')">Discard</button>
              </div>
              
              <div class="p3i10">
                <p v-if="playerCards[3][2][10][0]">
                  <img height="350px" :src="playerCards[3][2][10][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP1Items btn btn-primary btn-sm"  @click="giveManual('p4ItemsC10P1')">Give P1</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP2Items btn btn-success btn-sm"  @click="giveManual('p4ItemsC10P2')">Give P2</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10GiveP4Items btn btn-light btn-sm"  @click="giveManual('p4ItemsC10P4')">Give P4</button>
              </div>
              
              <div>
                <button width="200px" class="p3h10DiscardItems btn btn-danger btn-sm" @click="giveManual('p4DiscardItems10')">Discard</button>
              </div>
              
              <div class="p3su1">
                <p v-if="playerCards[3][7][1][0]">
                  <img height="350px" :src="playerCards[3][7][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h1DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p4DiscardUpgrades1')">Discard</button>
              </div>
              
              <div class="p3su2">
                <p v-if="playerCards[3][3][1][0]">
                  <img height="350px" :src="playerCards[3][3][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h2DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p4DiscardUpgrades2')">Discard</button>
              </div>
              
              <div class="p3su3">
                <p v-if="playerCards[3][3][2][0]">
                  <img height="350px" :src="playerCards[3][3][2][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h3DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p4DiscardUpgrades3')">Discard</button>
              </div>
              
              <div class="p3su4">
                <p v-if="playerCards[3][3][4][0]">
                  <img height="350px" :src="playerCards[3][3][3][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="p3h4DiscardUpgrades btn btn-danger btn-sm" @click="giveManual('p4DiscardUpgrades4')">Discard</button>
              </div>
              
              <div class="shopSelect">
                <select class="form-control col" v-model="shop" label="Choose Shop">
                  <option value="null" disabled>Choose Shop</option>
                  <option value="1">Beaumonte</option>
                  <option value="2">Meridian</option>
                  <option value="3">Osiris Shipworks</option>
                  <option value="4">Persephone</option>
                  <option value="5">Regina</option>
                  <option value="6">Silverhold Munitions</option>
                  <option value="7">Space Bazaar</option>
                </select>
              </div>
              
              <div v-if="shop === '1'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[4][0][3][0]">
                    <img height="350px" :src="playerCards[4][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[4][0][1][1][0]">
                    <img height="350px" :src="playerCards[4][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px"
                          class="rotateBeaumondeDiscards btn btn-warning"
                          @click="giveManual('rotateBeaumondeDiscards')"
                          >Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawBeaumondeConsidered1Player4')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawBeaumondeConsidered2Player4')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawBeaumondeConsidered3Player4')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addBeaumondeShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addBeaumondeShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardBeaumondeShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardBeaumondeShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-btn btn-danger" @click="giveManual('discardBeaumondeShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[4][0][2][0][0]">
                    <img height="350px" :src="playerCards[4][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[4][0][2][1]">
                    <img height="350px" :src="playerCards[4][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[4][0][2][2]">
                    <img height="350px" :src="playerCards[4][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '2'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[5][0][3][0]">
                    <img height="350px" :src="playerCards[5][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[5][0][1][1][0]">
                    <img height="350px" :src="playerCards[5][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateMeridianDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawMeridianConsidered1Player4')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawMeridianConsidered2Player4')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawMeridianConsidered3Player4')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addMeridianShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addMeridianShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardMeridianShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardMeridianShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardMeridianShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[5][0][2][0][0]">
                    <img height="350px" :src="playerCards[5][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[5][0][2][1]">
                    <img height="350px" :src="playerCards[5][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[5][0][2][2]">
                    <img height="350px" :src="playerCards[5][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '3'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[6][0][3][0]">
                    <img height="350px" :src="playerCards[6][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[6][0][1][1][0]">
                    <img height="350px" :src="playerCards[6][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateOsirisShipworksDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawOsirisShipworksConsidered1Player4')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawOsirisShipworksConsidered2Player4')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawOsirisShipworksConsidered3Player4')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addOsirisShipworksShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addOsirisShipworksShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardOsirisShipworksShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardOsirisShipworksShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardOsirisShipworksShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[6][0][2][0][0]">
                    <img height="350px" :src="playerCards[6][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[6][0][2][1]">
                    <img height="350px" :src="playerCards[6][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[6][0][2][2]">
                    <img height="350px" :src="playerCards[6][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '4'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[7][0][3][0]">
                    <img height="350px" :src="playerCards[7][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[7][0][1][1][0]">
                    <img height="350px" :src="playerCards[7][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotatePersephoneDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawPersephoneConsidered1Player4')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawPersephoneConsidered2Player4')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawPersephoneConsidered3Player4')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addPersephoneShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addPersephoneShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardPersephoneShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardPersephoneShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardPersephoneShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[7][0][2][0][0]">
                    <img height="350px" :src="playerCards[7][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[7][0][2][1]">
                    <img height="350px" :src="playerCards[7][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[7][0][2][2]">
                    <img height="350px" :src="playerCards[7][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '5'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[8][0][3][0]">
                    <img height="350px" :src="playerCards[8][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[8][0][1][1][0]">
                    <img height="350px" :src="playerCards[8][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateReginaDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawReginaConsidered1Player4')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawReginaConsidered2Player4')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawReginaConsidered3Player4')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addReginaShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addReginaShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardReginaShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardReginaShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardReginaShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[8][0][2][0][0]">
                    <img height="350px" :src="playerCards[8][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[8][0][2][1]">
                    <img height="350px" :src="playerCards[8][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[8][0][2][2]">
                    <img height="350px" :src="playerCards[8][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '6'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[9][0][3][0]">
                    <img height="350px" :src="playerCards[9][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[9][0][1][1][0]">
                    <img height="350px" :src="playerCards[9][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateSilverholdMunitionsDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawSilverholdMunitionsConsidered1Player4')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawSilverholdMunitionsConsidered2Player4')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawSilverholdMunitionsConsidered3Player4')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addSilverholdMunitionsShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addSilverholdMunitionsShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardSilverholdMunitionsShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardSilverholdMunitionsShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardSilverholdMunitionsShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[9][0][2][0][0]">
                    <img height="350px" :src="playerCards[9][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[9][0][2][1]">
                    <img height="350px" :src="playerCards[9][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[9][0][2][2]">
                    <img height="350px" :src="playerCards[9][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div v-if="shop === '7'">
                
                <div class="shop1Draw">
                  <p v-if="playerCards[10][0][3][0]">
                    <img height="350px" :src="playerCards[10][0][3][0]" alt=""></p>
                </div>
                
                <div class="shop1Discard">
                  <p v-if="playerCards[10][0][1][1][0]">
                    <img height="350px" :src="playerCards[10][0][1][1][0]" alt=""></p>
                </div>
                
                <div>
                  <button width="200px" class="rotateBeaumondeDiscards btn btn-warning" @click="giveManual('rotateSpaceBazaarDiscards')">Rotate Discards</button> 
                </div>
                
                <div>
                  <button width="200px" class="drawShopConsidered1 btn btn-success" @click="giveManual('drawSpaceBazaarConsidered1Player4')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered2 btn btn-success" @click="giveManual('drawSpaceBazaarConsidered2Player4')">Draw</button> 
                </div>
                <div>
                  <button width="200px" class="drawShopConsidered3 btn btn-success" @click="giveManual('drawSpaceBazaarConsidered3Player4')">Draw</button> 
                </div>
                
                <div>
                  <button width="200px" class="addShopToConsidered btn btn-info btn-lg" @click="giveManual('addSpaceBazaarShopToConsidered')">Add Shop</button> 
                </div>
                <div>
                  <button width="200px" class="addShopDiscardToConsidered btn btn-info btn-lg" @click="giveManual('addSpaceBazaarShopDiscardToConsidered')">Add Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered1 btn btn-danger" @click="giveManual('discardSpaceBazaarShopConsidered1')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered2 btn btn-danger" @click="giveManual('discardSpaceBazaarShopConsidered2')">Discard</button> 
                </div>
                <div>
                  <button width="200px" class="discardBeaumondeShopConsidered3 btn btn-danger" @click="giveManual('discardSpaceBazaarShopConsidered3')">Discard</button> 
                </div>
                <div class="shop1Chosen1">
                  <p v-if="playerCards[10][0][2][0][0]">
                    <img height="350px" :src="playerCards[10][0][2][0][0]" alt=""></p>
                </div>
                <div class="shop1Chosen2">
                  <p v-if="playerCards[10][0][2][1]">
                    <img height="350px" :src="playerCards[10][0][2][1][0]" alt=""></p>
                </div>
                <div class="shop1Chosen3">
                  <p v-if="playerCards[10][0][2][2]">
                    <img height="350px" :src="playerCards[10][0][2][2][0]" alt=""></p>
                </div>
              </div>
              
              <div class="showAlliance">
                <p v-if="playerCards[21][1][1][0]">
                  <img height="350px" :src="playerCards[21][1][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawAlliance btn-lg btn-success" @click="giveManual('drawAlliance')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleAlliance btn-lg btn-danger" @click="giveManual('shuffleAlliance')">Shuffle</button> 
              </div>
              
              <div class="showBorder">
                <p v-if="playerCards[21][2][1][0]">
                  <img height="350px" :src="playerCards[21][2][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawBorder btn-lg btn-success" @click="giveManual('drawBorder')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleBorder btn-lg btn-danger" @click="giveManual('shuffleBorder')">Shuffle</button> 
              </div>

              <div class="showRim">
                <p v-if="playerCards[21][3][1][0]">
                  <img height="350px" :src="playerCards[21][3][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawRim btn-lg btn-success" @click="giveManual('drawRim')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleRim btn-lg btn-danger" @click="giveManual('shuffleRim')">Shuffle</button> 
              </div>

              <div class="showBounty">
                <p v-if="playerCards[21][4][1][0]">
                  <img height="350px" :src="playerCards[21][4][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawBounty btn-lg btn-success" @click="giveManual('drawBounty')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleBounty btn-lg btn-danger" @click="giveManual('shuffleBounty')">Shuffle</button> 
              </div>

              <div class="showMisbehave">
                <p v-if="playerCards[21][5][1][0]">
                  <img height="350px" :src="playerCards[21][5][1][0]" alt=""></p>
              </div>
              
              <div>
                <button width="200px" class="drawMisbehave btn-lg btn-success" @click="giveManual('drawMisbehave')">Draw</button> 
              </div>
              
              <div>
                <button width="200px" class="shuffleMisbehave btn-lg btn-danger" @click="giveManual('shuffleMisbehave')">Shuffle</button> 
              </div>

              <div class="showScenario">
                <p v-if="playerCards[23][0]">
                  <img height="1000px" :src="playerCards[23][0]" alt=""></p>
              </div>

              <div>
                <button width="200px" class="nextScenario btn-lg btn-success" @click="giveManual('nextScenario')">Next Scenario</button> 
              </div>
                
             

              <div class="moneyAmount">
                <p>Credits: {{ wallet4 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens4 }}</p>
              </div>

              <div class="goalTokensAdd">
                <div class="btn-group" role="group" aria-label="Basic example">
                  
                    <button class="btn-lg btn-success" @click="moveMoney1('goal4Add1')">+</button> 
                    <button class="btn-lg btn-danger" @click="moveMoney1('goal4Subtract1')">-</button> 
                  
                </div>
              </div>

              <div class="warrants">
                <p>Warrants: {{ warrant4 }}</p>
              </div>

              <div class="warrantsAdd">
                <div class="btn-group" role="group" aria-label="Basic example">
                  
                    <button class="btn-lg btn-success" @click="moveMoney1('warrant4Add1')">+</button> 
                    <button class="btn-lg btn-danger" @click="moveMoney1('warrant4Subtract1')">-</button> 
                  
                </div>
              </div>
              


              <div class="hundredCredits">
                <img v-bind:src="playerCards[22][0][0]"
                     v-on:click="moveMoney1('4add100')"
                     height="90px"/>
              </div>

              <div class="fiveHundred">
                <img v-bind:src="playerCards[22][1][0]"
                     v-on:click="moveMoney1('4add500')"
                     height="90px"/>
              </div>

              <div class="thousand">
                <img v-bind:src="playerCards[22][2][0]"
                     v-on:click="moveMoney1('4add1000')"
                     height="90px"/>
              </div>

              <div class="twoThousand">
                <img v-bind:src="playerCards[22][3][0]"
                     v-on:click="moveMoney1('4add2000')"
                     height="90px"/>
              </div>

              <div class="negativeHundredCredits">
                <img v-bind:src="playerCards[22][4][0]"
                     v-on:click="moveMoney1('4minus100')"
                     height="90px"/>
              </div>

              <div class="negativeFiveHundred">
                <img v-bind:src="playerCards[22][5][0]"
                     v-on:click="moveMoney1('4minus500')"
                     height="90px"/>
              </div>

              <div class="negativeThousand">
                <img v-bind:src="playerCards[22][6][0]"
                     v-on:click="moveMoney1('4minus1000')"
                     height="90px"/>
              </div>

              <div class="negativeTwoThousand">
                <img v-bind:src="playerCards[22][7][0]"
                     v-on:click="moveMoney1('3minus2000')"
                     height="90px"/>
              </div>
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>
    </div>


    <div class="masterPositionPlayer1">
      <div class="playerLabel">
        <p>Player 1</p>
        </div>
      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[1][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              
              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              
              
              
              <div class="img1">
                <p v-if="shipInv[1][0][0][0]"> 
                  <img height="500px" :src="shipCards[1][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[1][0][0][0]"
                     
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[1][0][1][0]"
                     
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[1][0][2][0]"
                     
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[1][0][3][0]"
                     
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[1][0][4][0]"
                     
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[1][0][5][0]"
                     
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[1][0][6][0]"
                     
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[1][0][7][0]"
                     
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[1][0][8][0]"
                     
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[1][0][9][0]"
                     
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[1][0][10][0]"
                     
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[1][0][11][0]"
                     
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[0][5][2][0]"> 
                  <img height="175px" :src="playerCards[0][5][2][0]" alt=""></p>
              </div>
              
              
              <div class="job1">
                <p v-if="playerCards[0][6][1][0]"> 
                  <img height="175px" :src="playerCards[0][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[0][6][1][0]"> 
                  <img height="175px" :src="playerCards[0][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[0][6][1][0]"> 
                  <img height="175px" :src="playerCards[0][6][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3h1">
                <p v-if="playerCards[0][0][1][0]">
                  <img height="350px" :src="playerCards[0][0][1][0]" alt="playerCards[0][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[0][0][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[0][1][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[0][2][0]"
                     
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[0][3][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[0][4][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[0][5][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[0][6][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[0][7][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[0][8][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[0][9][0]"
                     
                     height="45px"/>
              </div>
              
              
              <div class="p3h2">
                <p v-if="playerCards[0][0][2][0]"> 
                  <img height="350px" :src="playerCards[0][0][2][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              
              <div class="p3h3">
                <p v-if="playerCards[0][0][3][0]"> 
                  <img height="350px" :src="playerCards[0][0][3][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h4">
                <p v-if="playerCards[0][0][4][0]"> 
                  <img height="350px" :src="playerCards[0][0][4][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h5">
                <p v-if="playerCards[0][0][5][0]"> 
                  <img height="350px" :src="playerCards[0][0][5][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h6">
                <p v-if="playerCards[0][0][6][0]"> 
                  <img height="350px" :src="playerCards[0][0][6][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h7">
                <p v-if="playerCards[0][0][7][0]"> 
                  <img height="350px" :src="playerCards[0][0][7][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h8">
                <p v-if="playerCards[0][0][8][0]"> 
                  <img height="350px" :src="playerCards[0][0][8][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h9">
                <p v-if="playerCards[0][0][9][0]"> 
                  <img height="350px" :src="playerCards[0][0][9][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              <div class="p3h10">
                <p v-if="playerCards[0][0][10][0]"> 
                  <img height="350px" :src="playerCards[0][0][10][0]" alt="playerCards[0][0]"></p>
              </div>
              
              
              
              <div class="p3i1">
                <p v-if="playerCards[0][2][1][0]">
                  <img height="350px" :src="playerCards[0][2][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3i2">
                <p v-if="playerCards[0][2][2][0]">
                  <img height="350px" :src="playerCards[0][2][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3i3">
                <p v-if="playerCards[0][2][3][0]">
                  <img height="350px" :src="playerCards[0][2][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3i4">
                <p v-if="playerCards[0][2][4][0]">
                  <img height="350px" :src="playerCards[0][2][4][0]" alt=""></p>
              </div>
              
              
              <div class="p3i5">
                <p v-if="playerCards[0][2][5][0]">
                  <img height="350px" :src="playerCards[0][2][5][0]" alt=""></p>
              </div>
              
              
              <div class="p3i6">
                <p v-if="playerCards[0][2][6][0]">
                  <img height="350px" :src="playerCards[0][2][6][0]" alt=""></p>
              </div>
              
              
              <div class="p3i7">
                <p v-if="playerCards[0][2][7][0]">
                  <img height="350px" :src="playerCards[0][2][7][0]" alt=""></p>
              </div>
              
              
              <div class="p3i8">
                <p v-if="playerCards[0][2][8][0]">
                  <img height="350px" :src="playerCards[0][2][8][0]" alt=""></p>
              </div>
              
              
              <div class="p3i9">
                <p v-if="playerCards[0][2][9][0]">
                  <img height="350px" :src="playerCards[0][2][9][0]" alt=""></p>
              </div>
              
              
              <div class="p3i10">
                <p v-if="playerCards[0][2][10][0]">
                  <img height="350px" :src="playerCards[0][2][10][0]" alt=""></p>
              </div>
              
              
              <div class="p3su1">
                <p v-if="playerCards[0][7][1][0]">
                  <img height="350px" :src="playerCards[0][7][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3su2">
                <p v-if="playerCards[0][3][1][0]">
                  <img height="350px" :src="playerCards[0][3][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3su3">
                <p v-if="playerCards[0][3][2][0]">
                  <img height="350px" :src="playerCards[0][3][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3su4">
                <p v-if="playerCards[0][3][3][0]">
                  <img height="350px" :src="playerCards[0][3][4][0]" alt=""></p>
              </div>
              
              
              <div class="moneyAmount">
                <p>Credits: {{ wallet1 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens1 }}</p>
              </div>

              
              <div class="warrants">
                <p>Warrants: {{ warrant1 }}</p>
              </div>

              
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>


    </div>  



    <div class="masterPositionPlayer2">
      <div class="playerLabel">
        <p>Player 2</p>
        </div>
      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[2][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              
              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              
              
              
              <div class="img1">
                <p v-if="shipInv[2][0][0][0]"> 
                  <img height="500px" :src="shipCards[2][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[2][0][0][0]"
                     
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[2][0][1][0]"
                     
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[2][0][2][0]"
                     
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[2][0][3][0]"
                     
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[2][0][4][0]"
                     
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[2][0][5][0]"
                     
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[2][0][6][0]"
                     
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[2][0][7][0]"
                     
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[2][0][8][0]"
                     
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[2][0][9][0]"
                     
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[2][0][10][0]"
                     
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[2][0][11][0]"
                     
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[1][5][2][0]"> 
                  <img height="175px" :src="playerCards[1][5][2][0]" alt=""></p>
              </div>
              
              
              <div class="job1">
                <p v-if="playerCards[1][6][1][0]"> 
                  <img height="175px" :src="playerCards[1][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[1][6][1][0]"> 
                  <img height="175px" :src="playerCards[1][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[1][6][1][0]"> 
                  <img height="175px" :src="playerCards[1][6][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3h1">
                <p v-if="playerCards[1][0][1][0]">
                  <img height="350px" :src="playerCards[1][0][1][0]" alt="playerCards[1][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[1][0][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[1][1][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[1][2][0]"
                     
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[1][3][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[1][4][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[1][5][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[1][6][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[1][7][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[1][8][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[1][9][0]"
                     
                     height="45px"/>
              </div>
              
              
              <div class="p3h2">
                <p v-if="playerCards[1][0][2][0]"> 
                  <img height="350px" :src="playerCards[1][0][2][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              
              <div class="p3h3">
                <p v-if="playerCards[1][0][3][0]"> 
                  <img height="350px" :src="playerCards[1][0][3][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h4">
                <p v-if="playerCards[1][0][4][0]"> 
                  <img height="350px" :src="playerCards[1][0][4][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h5">
                <p v-if="playerCards[1][0][5][0]"> 
                  <img height="350px" :src="playerCards[1][0][5][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h6">
                <p v-if="playerCards[1][0][6][0]"> 
                  <img height="350px" :src="playerCards[1][0][6][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h7">
                <p v-if="playerCards[1][0][7][0]"> 
                  <img height="350px" :src="playerCards[1][0][7][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h8">
                <p v-if="playerCards[1][0][8][0]"> 
                  <img height="350px" :src="playerCards[1][0][8][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h9">
                <p v-if="playerCards[1][0][9][0]"> 
                  <img height="350px" :src="playerCards[1][0][9][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              <div class="p3h10">
                <p v-if="playerCards[1][0][10][0]"> 
                  <img height="350px" :src="playerCards[1][0][10][0]" alt="playerCards[1][0]"></p>
              </div>
              
              
              
              <div class="p3i1">
                <p v-if="playerCards[1][2][1][0]">
                  <img height="350px" :src="playerCards[1][2][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3i2">
                <p v-if="playerCards[1][2][2][0]">
                  <img height="350px" :src="playerCards[1][2][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3i3">
                <p v-if="playerCards[1][2][3][0]">
                  <img height="350px" :src="playerCards[1][2][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3i4">
                <p v-if="playerCards[1][2][4][0]">
                  <img height="350px" :src="playerCards[1][2][4][0]" alt=""></p>
              </div>
              
              
              <div class="p3i5">
                <p v-if="playerCards[1][2][5][0]">
                  <img height="350px" :src="playerCards[1][2][5][0]" alt=""></p>
              </div>
              
              
              <div class="p3i6">
                <p v-if="playerCards[1][2][6][0]">
                  <img height="350px" :src="playerCards[1][2][6][0]" alt=""></p>
              </div>
              
              
              <div class="p3i7">
                <p v-if="playerCards[1][2][7][0]">
                  <img height="350px" :src="playerCards[1][2][7][0]" alt=""></p>
              </div>
              
              
              <div class="p3i8">
                <p v-if="playerCards[1][2][8][0]">
                  <img height="350px" :src="playerCards[1][2][8][0]" alt=""></p>
              </div>
              
              
              <div class="p3i9">
                <p v-if="playerCards[1][2][9][0]">
                  <img height="350px" :src="playerCards[1][2][9][0]" alt=""></p>
              </div>
              
              
              <div class="p3i10">
                <p v-if="playerCards[1][2][10][0]">
                  <img height="350px" :src="playerCards[1][2][10][0]" alt=""></p>
              </div>
              
              
              <div class="p3su1">
                <p v-if="playerCards[1][7][1][0]">
                  <img height="350px" :src="playerCards[1][7][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3su2">
                <p v-if="playerCards[1][3][1][0]">
                  <img height="350px" :src="playerCards[1][3][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3su3">
                <p v-if="playerCards[1][3][2][0]">
                  <img height="350px" :src="playerCards[1][3][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3su4">
                <p v-if="playerCards[1][3][3][0]">
                  <img height="350px" :src="playerCards[1][3][4][0]" alt=""></p>
              </div>
              
              
              <div class="moneyAmount">
                <p>Credits: {{ wallet2 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens2 }}</p>
              </div>

              
              <div class="warrants">
                <p>Warrants: {{ warrant2 }}</p>
              </div>

              
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>


<div class="masterPositionPlayer3">
      <div class="playerLabel">
        <p>Player 3</p>
        </div>
      <div class="totalSupply">
        <table class="list-group text-left">
     
          <ul id="example-1">
            <li class="list-group-item" v-for="item in shipInv[3][1][0]" :key="item">
              {{ item }}
            </li>
          </ul>
        </table>
      </div>
      
      <div class="row">
        <div class="col-1-4">
          
          <div class="img-wrapper">
            <div class="container">
              
              
              <div class="jobsCompleteLabel">
                <h2>Completed</h2>
              </div>
              
              
              
              
              <div class="img1">
                <p v-if="shipInv[1][0][0][0]"> 
                  <img height="500px" :src="shipCards[3][0][0][0]" alt=""></p>
              </div>
              <div class="img2">
                <img v-bind:src="shipInv[3][0][0][0]"
                     
                     height="88px"/>
              </div>
              <div class="img3">
                <img v-bind:src="shipInv[3][0][1][0]"
                     
                     height="88px"/>
              </div>
              <div class="img4">
                <img v-bind:src="shipInv[3][0][2][0]"
                     
                     height="88px"/>
              </div>
              <div class="img5">
                <img v-bind:src="shipInv[3][0][3][0]"
                     
                     height="88px"/>
              </div>
              <div class="img6">
                <img v-bind:src="shipInv[3][0][4][0]"
                     
                     height="88px"/>
              </div>
              <div class="img7">
                <img v-bind:src="shipInv[3][0][5][0]"
                     
                     height="88px"/>
              </div>
              <div class="img8">
                <img v-bind:src="shipInv[3][0][6][0]"
                     
                     height="88px"/>
              </div>
              <div class="img9">
                <img v-bind:src="shipInv[3][0][7][0]"
                     
                     height="88px"/>
              </div>
              <div class="img10">
                <img v-bind:src="shipInv[3][0][8][0]"
                     
                     height="88px"/>
              </div>
              <div class="img11">
                <img v-bind:src="shipInv[3][0][9][0]"
                     
                     height="88px"
                     />
              </div>
              <div class="img12">
                <img v-bind:src="shipInv[3][0][10][0]"
                     
                     height="88px"/>
              </div>
              <div class="img13">
                <img v-bind:src="shipInv[3][0][11][0]"
                     
                     height="88px"/>
              </div>
              
              <div class="finishedJobs">
                <p v-if="playerCards[2][5][2][0]"> 
                  <img height="175px" :src="playerCards[2][5][2][0]" alt=""></p>
              </div>
              
              
              <div class="job1">
                <p v-if="playerCards[2][6][1][0]"> 
                  <img height="175px" :src="playerCards[2][6][1][0]" alt=""></p>
              </div>

              <div class="job2">
                <p v-if="playerCards[2][6][1][0]"> 
                  <img height="175px" :src="playerCards[2][6][2][0]" alt=""></p>
              </div>
              
              <div class="job3">
                <p v-if="playerCards[2][6][1][0]"> 
                  <img height="175px" :src="playerCards[2][6][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3h1">
                <p v-if="playerCards[2][0][1][0]">
                  <img height="350px" :src="playerCards[2][0][1][0]" alt="playerCards[2][0]"></p>
              </div>


              <div class="p3h1Mood">
                <img v-bind:src="crewMood[2][0][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h2Mood">
                <img v-bind:src="crewMood[2][1][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h3Mood">
                <img v-bind:src="crewMood[2][2][0]"
                     
                     height="45px"/>
              </div>



              <div class="p3h4Mood">
                <img v-bind:src="crewMood[2][3][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h5Mood">
                <img v-bind:src="crewMood[2][4][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h6Mood">
                <img v-bind:src="crewMood[2][5][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h7Mood">
                <img v-bind:src="crewMood[2][6][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h8Mood">
                <img v-bind:src="crewMood[2][7][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h9Mood">
                <img v-bind:src="crewMood[2][8][0]"
                     
                     height="45px"/>
              </div>

              <div class="p3h10Mood">
                <img v-bind:src="crewMood[2][9][0]"
                     
                     height="45px"/>
              </div>
              
              
              <div class="p3h2">
                <p v-if="playerCards[2][0][2][0]"> 
                  <img height="350px" :src="playerCards[2][0][2][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              
              <div class="p3h3">
                <p v-if="playerCards[2][0][3][0]"> 
                  <img height="350px" :src="playerCards[2][0][3][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h4">
                <p v-if="playerCards[2][0][4][0]"> 
                  <img height="350px" :src="playerCards[2][0][4][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h5">
                <p v-if="playerCards[2][0][5][0]"> 
                  <img height="350px" :src="playerCards[2][0][5][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h6">
                <p v-if="playerCards[2][0][6][0]"> 
                  <img height="350px" :src="playerCards[2][0][6][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h7">
                <p v-if="playerCards[2][0][7][0]"> 
                  <img height="350px" :src="playerCards[2][0][7][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h8">
                <p v-if="playerCards[2][0][8][0]"> 
                  <img height="350px" :src="playerCards[2][0][8][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h9">
                <p v-if="playerCards[2][0][9][0]"> 
                  <img height="350px" :src="playerCards[2][0][9][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              <div class="p3h10">
                <p v-if="playerCards[2][0][10][0]"> 
                  <img height="350px" :src="playerCards[2][0][10][0]" alt="playerCards[2][0]"></p>
              </div>
              
              
              
              <div class="p3i1">
                <p v-if="playerCards[2][2][1][0]">
                  <img height="350px" :src="playerCards[2][2][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3i2">
                <p v-if="playerCards[2][2][2][0]">
                  <img height="350px" :src="playerCards[2][2][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3i3">
                <p v-if="playerCards[2][2][3][0]">
                  <img height="350px" :src="playerCards[2][2][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3i4">
                <p v-if="playerCards[2][2][4][0]">
                  <img height="350px" :src="playerCards[2][2][4][0]" alt=""></p>
              </div>
              
              
              <div class="p3i5">
                <p v-if="playerCards[2][2][5][0]">
                  <img height="350px" :src="playerCards[2][2][5][0]" alt=""></p>
              </div>
              
              
              <div class="p3i6">
                <p v-if="playerCards[2][2][6][0]">
                  <img height="350px" :src="playerCards[2][2][6][0]" alt=""></p>
              </div>
              
              
              <div class="p3i7">
                <p v-if="playerCards[2][2][7][0]">
                  <img height="350px" :src="playerCards[2][2][7][0]" alt=""></p>
              </div>
              
              
              <div class="p3i8">
                <p v-if="playerCards[2][2][8][0]">
                  <img height="350px" :src="playerCards[2][2][8][0]" alt=""></p>
              </div>
              
              
              <div class="p3i9">
                <p v-if="playerCards[2][2][9][0]">
                  <img height="350px" :src="playerCards[2][2][9][0]" alt=""></p>
              </div>
              
              
              <div class="p3i10">
                <p v-if="playerCards[2][2][10][0]">
                  <img height="350px" :src="playerCards[2][2][10][0]" alt=""></p>
              </div>
              
              
              <div class="p3su1">
                <p v-if="playerCards[2][7][1][0]">
                  <img height="350px" :src="playerCards[2][7][1][0]" alt=""></p>
              </div>
              
              
              <div class="p3su2">
                <p v-if="playerCards[2][3][1][0]">
                  <img height="350px" :src="playerCards[2][3][2][0]" alt=""></p>
              </div>
              
              
              <div class="p3su3">
                <p v-if="playerCards[2][3][2][0]">
                  <img height="350px" :src="playerCards[2][3][3][0]" alt=""></p>
              </div>
              
              
              <div class="p3su4">
                <p v-if="playerCards[2][3][3][0]">
                  <img height="350px" :src="playerCards[2][3][4][0]" alt=""></p>
              </div>
              
              
              <div class="moneyAmount">
                <p>Credits: {{ wallet3 }}</p>
              </div>

              <div class="goalTokens">
                <p>Goal Tokens: {{ goalTokens3 }}</p>
              </div>

              
              <div class="warrants">
                <p>Warrants: {{ warrant3 }}</p>
              </div>

              
              
              
       
            </div>
          </div>
        </div>
        <div>
          
        </div>
      </div>
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5">
          <p></p>
        </div>
      </div>
      
      <div class="row">
        <div class="col pt-5 pb-5">
          <p></p>
        </div>
      </div>
      
      
      
      <div class="row">
        
      </div>


    </div>  
      
      
    </div>  



    
    </div>
  
  
    <div v-else>
      <div class="startPage">
        
        
        <div class="row">
          <div class="col">
            <form @submit.prevent="setName" class="mt-4">
              <div class="form-group row">
                <select class="form-control col" v-model="player" label="Choose Your Player Number">
                  <option value="null" disabled>Choose Your Player Number</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        
        <div v-if="ready">
          <div class="row">
            <div class="col">
              <ul id="chatbox">
                <table class="list-group text-right">
                  <small v-if="typing" class="text-grey">
                    <i>{{typing}} is typing</i>
                  </small>
                  <li class="list-group-item" v-for="message in messages" :key="message">
                    <span :class="{'float-left':(message.type===1)}">
                      <small class="text-blue">:{{message.by}}</small>
                      {{message.message}}
                    </span>
                  </li>
                </table>
              </ul>
              <div class="card-body">
                <form @submit.prevent="send">
                  <div class="form-group">
                    <input type="text" class="form-control" v-model="newmessage" placeholder="Type Here">
                  </div>
                </form>
              </div>
            </div>
          </div>  
        </div>
      </div>
    
    
  </div>
  
  <div class="canvas">
    <div class="canvasPosition">
      <div id="container" class="canvas">
        <div>
          <canvas ref="game1"
                  width="2500"
                  height="1000"
                  z-index="4"
                  style="border: 1px solid black; position: absolute;">
          </canvas>
        </div>
        <div>
          <canvas ref="game2"
                  width="2500"
                  height="1000"
                  z-index="3"
                  style="border: 1px solid black; position: absolute;">
          </canvas>
        </div>
        <div>
          <canvas ref="game3"
                  width="2500"
                  height="1000"
                  z-index="2"
                  style="border: 1px solid black; position: absolute;">
          </canvas>
        </div>
        <div>
          <canvas ref="game4"
                  width="2500"
                  height="1000"
                  z-index="1"
                  style="border: 1px solid black; position: absolute;">
          </canvas>
        </div>
        <div>
          <canvas ref="game5"
                  width="2500"
                  height="1000"
                  z-index="8"
                  style="border: 1px solid black; position: absolute;">
          </canvas>
        </div>
        <div>
          <canvas ref="game6"
                  width="2500"
                  height="1000"
                  z-index="9"
                  style="border: 1px solid black; position: absolute;">
          </canvas>
        </div>
        <div>
          <canvas ref="game7"
                  width="2500"
                  height="1000"
                  z-index="10"
                  style="border: 1px solid black; position: absolute;">
          </canvas>
        </div>
        <div>
          <canvas ref="canvas"
                  id="canvas"
                  width="2500"
                  height="1000"
                  z-index="0"
                  style="border: 1px solid black position: relative;">
          </canvas>
        </div>
      </div>
    </div>
  </div>
  
  <div class="row" v-if="ready">
    <div class="col">      
      
      <div class="dice-wrapper">
        <div :class="getDice"></div>
        <button @click="setDice">Roll the dice!</button>
      </div>
    </div>
  </div>
  </div>
 
</template>

<script src="vue.js"></script>
<script src="https://unpkg.com/vue-gallery-slideshow"></script>

<style>
@import './game_styles.css';
</style>

<script>
import io from "socket.io-client";
import "./dice_styles/dice.css";
import "./cards/alliance_closer_folder.css";
import "./z_broken_shuttle.jpg";
import "./z_cruiser_patrol.jpg";
import "./z_engine_room.jpg";
import "./z_minor_tech_diff.jpg";
import "./z_the_big_black.jpg";
import "./bonanza.png";
import "./bonniemae.png";
import VueGallerySlideshow from 'vue-gallery-slideshow';
import myImage from "./map-min.jpg";
import ship from "./ship.png";
import ship_green from "./green_ship.png";
import ship_blue from "./blue_ship.png";
import ship_yellow from "./yellow_ship.png";
import dice_box from "./dice_box.jpg";
import alliance_base from "./alliance_base.png";
import cruiser from "./cruiser.png";
import reaver from "./reaver.png";

var z_broken_shuttle = require("./z_broken_shuttle.jpg")
var z_cruiser_patrol = require("./z_cruiser_patrol.jpg")
var z_engine_room = require("./z_engine_room.jpg")
var z_minor_tech_diff = require("./z_minor_tech_diff.jpg")
var z_the_big_black = require("./z_the_big_black.jpg")
var bonanza = require("./bonanza.png")
var bonniemae = require("./bonniemae.png")
export default {
    name: "Firefly",
    data() {
        return {
            
            newmessage: null,
            messages: [],
            typing: false,
            online: [],
            name: null,
            ready: false,
            player: null,
            shop: null,
            shipCards2: [1],
            shipCards: [
                [bonanza], [bonniemae]],
            info: [],
            connectionCount: 0,
            nestedImagesArray: [
                [
                    z_broken_shuttle,
                    z_cruiser_patrol,
                    z_engine_room,
                    z_minor_tech_diff,
                    z_the_big_black
                ],
                []
            ],
            travelCards: [ [z_engine_room], [z_the_big_black] ],
            crewMood: [],
            playerCards: [ [ [], [], [] ],
                           [ [], [], [] ],
                           [ [], [], [] ],
                           [ [], [], [] ]
                         ],
            images: [
                z_broken_shuttle,
                z_cruiser_patrol,
                z_engine_room,
                z_minor_tech_diff,
                z_the_big_black
                
            ],
            chosenCard:[],
            test:[z_broken_shuttle],
            diceNum: {},
            cardNum: {},
            shipInv: [
                require("./fuel.jpg"),
                require("./parts.jpg"),
                require("./cargo.jpg"),
                require("./contraband.jpg"),
                require("./passenger.jpg"),
                require("./fugitive.jpg")
            ],
            
            player1Inv: [
                require("./z_broken_shuttle.jpg"),
                require("./z_cruiser_patrol.jpg"),
                require("./z_engine_room.jpg"),
                require("./z_minor_tech_diff.jpg")
            ],
            player2Inv: [
                require("./bonanza.png"),
                require("./bonniemae.png")
            ],
            index: null,
            player1Chosen: {},
            player2Chosen: {},
            player1Index: [],
            player2Index: [],
            player3Inv: {},
            player4Inv: {},
            removedCards: {},
            socket: {},
            context: {},
            wallet1: 4,
            wallet2: 4,
            wallet3: 4,
            wallet4: 4,
            warrant1: 1000,
            warrant2: 1000,
            warrant3: 1000,
            warrant4: 1000,
            goalTokens1: 1000,
            goalTokens2: 1000,
            goalTokens3: 1000,
            goalTokens4: 1000,
            position: {
                x: 0,
                y: 0
            },
            position2: {
                x: 0,
                y: 0
            },
            position3: {
                x: 0,
                y: 0
            },
            position4: {
                x: 0,
                y: 0
            },
            position5: {
                x: 0,
                y: 0
            },
            position6: {
                x: 0,
                y: 0
            },
            position7: {
                x: 0,
                y: 0
            }
        }
    },
      created() {
        this.socket = io('testtesttest' , { transport : ['websocket'] });
this.socket.on('chat-message', (data) => {
            this.messages.push({ message: data.message, type: 1, by: data.user })
            this.typing = false
            this.$nextTick(() => {
            this.scrollToEnd();
            });
        })
        
        this.socket.on('typing', (data) => {
            console.log(data)
            this.typing = data
            
        })
this.socket.on('stoptyping', () => {
            this.typing = false
            this.$nextTick(() => {
                var messageBox = document.getElementByID('chatbox');
                messageBox.scrollTop = messageBox.scrollHeight;
            });
            this.scrollToEnd();
                })
this.socket.on('left', (name) => {
                    this.online.splice(this.online.indexOf(name))
                    this.info.push({ name: name, type: 'Left' })
                    setTimeout(() => {
                        this.info = []
                    }, 5000);
                })
        
        this.socket.on('joined', (name) => {
                    this.online.push(name)
                    this.info.push({ name: name, type: 'Joined' })
                    setTimeout(() => {
                        this.info = []
                    }, 5000);
                })
        },
    mounted() {
        this.func();
        this.context1 = this.$refs.game1.getContext("2d");
        this.context2 = this.$refs.game2.getContext("2d");
        this.context3 = this.$refs.game3.getContext("2d");
        this.context4 = this.$refs.game4.getContext("2d");
        this.context5 = this.$refs.game5.getContext("2d");
        this.context6 = this.$refs.game6.getContext("2d");
        this.context7 = this.$refs.game7.getContext("2d");

        this.socket.on("crewMood", changeMood => {
            this.crewMood = changeMood;
        });
        
        this.socket.on("wallet1", moneyData1 => {
            this.wallet1 = moneyData1;
        });
        this.socket.on("wallet2", moneyData1 => {
            this.wallet2 = moneyData1;
        });
        this.socket.on("wallet3", moneyData1 => {
            this.wallet3 = moneyData1;
        });
        this.socket.on("wallet4", moneyData1 => {
            this.wallet4 = moneyData1;
        });
        this.socket.on("warrant1", moneyData1 => {
            this.warrant1 = moneyData1;
        });
        this.socket.on("warrant2", moneyData1 => {
            this.warrant2 = moneyData1;
        });
        this.socket.on("warrant3", moneyData1 => {
            this.warrant3 = moneyData1;
        });
        this.socket.on("warrant4", moneyData1 => {
            this.warrant4 = moneyData1;
        });
        this.socket.on("goalTokens1", moneyData1 => {
            this.goalTokens1 = moneyData1;
        });
        this.socket.on("goalTokens2", moneyData1 => {
            this.goalTokens2 = moneyData1;
        });
        this.socket.on("goalTokens3", moneyData1 => {
            this.goalTokens3 = moneyData1;
        });
        this.socket.on("goalTokens4", moneyData1 => {
            this.goalTokens4 = moneyData1;
        });

        
 window.onbeforeunload = () => {
            this.socket.emit('left', this.name)
 }
        this.socket.on('noOfConnections', (count) => {
            this.connectionCount = count
        })
        this.socket.on("travelCards", movingMove => {
            console.log("socket on before travelCards connect");
            this.travelCards = movingMove;
            
        });
this.socket.on ("playerCards", giveToManual => {
            console.log("someone tried to give a card");
            this.playerCards = giveToManual;
            console.log("playerCards should equal giveTo",
                        "player1 inv length = ", this.playerCards[0][0].length,
                        "player2 inv length = ", this.playerCards[1][0].length);
        });
        this.socket.on ("playerCards", giveTo => {
            console.log("someone tried to give a card");
            this.playerCards = giveTo;
            console.log("playerCards should equal giveTo",
                        "player1 inv length = ", this.playerCards[0][0].length,
                        "player2 inv length = ", this.playerCards[1][0].length);
        });
        
        this.socket.on ("shipInv", changeSupply => {
            console.log("vue tried changing ship supply");
            this.shipInv = changeSupply
        });
        this.socket.on ("shipCards", changeShip => {
            console.log("vue tried changing the ship");
            this.shipCards = changeShip
        });
        this.socket.on ("shipCards2", changeShip2 => {
            console.log("vue tried changing the ship");
            this.shipCards2 = changeShip2
        });
        this.socket.on("position", data => {
            let img = new Image();
            img.src = ship_blue;
            this.position = data;
            this.context1.fillStyle = 'green'
            this.context1.clearRect(0, 0, this.$refs.game1.width,
                                   this.$refs.game1.height);
            this.context1.drawImage(img, this.position.x,
                                    this.position.y, 70, 70
                                 );
            
        });
        this.socket.on("position2", data2 => {
            let img = new Image();
            img.src = ship_green;
            this.position2 = data2;
            this.context2.fillStyle = 'green'
            this.context2.clearRect(0, 0, this.$refs.game2.width,
                                   this.$refs.game2.height);
            this.context2.drawImage(img, this.position2.x,
                                    this.position2.y, 70, 70
                                 );
             
        });
this.socket.on("position3", data3 => {
            let img = new Image();
            img.src = ship;
            this.position3 = data3;
            this.context3.fillStyle = 'green'
            this.context3.clearRect(0, 0, this.$refs.game3.width,
                                   this.$refs.game3.height);
            this.context3.drawImage(img, this.position3.x,
                                    this.position3.y, 70, 70
                                 );
             
        });

this.socket.on("position4", data4 => {
            let img = new Image();
            img.src = ship_yellow;
            this.position4 = data4;
            this.context4.fillStyle = 'green'
            this.context4.clearRect(0, 0, this.$refs.game4.width,
                                   this.$refs.game4.height);
            this.context4.drawImage(img, this.position4.x,
                                    this.position4.y, 70, 70
                                 );
             
});
        this.socket.on("position5", data5 => {
            let img = new Image();
            img.src = alliance_base;
            this.position5 = data5;
            this.context5.fillStyle = 'green'
            this.context5.clearRect(0, 0, this.$refs.game5.width,
                                   this.$refs.game5.height);
            this.context5.drawImage(img, this.position5.x,
                                    this.position5.y, 140, 140
                                 );
             
        });
        this.socket.on("position6", data6 => {
            let img = new Image();
            img.src = cruiser;
            this.position6 = data6;
            this.context6.fillStyle = 'green'
            this.context6.clearRect(0, 0, this.$refs.game6.width,
                                   this.$refs.game6.height);
            this.context6.drawImage(img, this.position6.x,
                                    this.position6.y, 120, 70
                                 );
             
        });
        this.socket.on("position7", data7 => {
            let img = new Image();
            img.src = reaver;
            this.position7 = data7;
            this.context7.fillStyle = 'green'
            this.context7.clearRect(0, 0, this.$refs.game7.width,
                                   this.$refs.game7.height);
            this.context7.drawImage(img, this.position7.x,
                                    this.position7.y, 120, 70
                                 );
             
        });
        

    },
    methods: {
  send() {
            this.socket.emit('chat-message', { message: this.newmessage, user: this.name })
            this.messages.push({ message: this.newmessage, type: 0, by: 'Me' })
            this.newmessage = null
            
            this.$nextTick(() => {
                this.scrollToEnd();
            });
},
 isTyping() {
            this.socket.emit('typing', this.name)
            
        },
        setName() {
            this.socket.emit('joined', this.name)
            this.ready = true
        },

        scrollToEnd: function() {
            var chatbox = this.$el.querySelector("#chatbox");
            chatbox.scrollTop = container.scrollHeight;
        },
        func: function() {
            let cvn = this.$refs.canvas;
            let ctx = cvn.getContext("2d");
            let bg = new Image();
            bg.src = myImage;
            bg.onload = function() {
                ctx.drawImage(bg, 0, 0, bg.width * .5  , bg.height * .5  );
            };
        },
        backuPicker: function() {
            var chosenImage = Math.floor(Math.random() * this.images.length);
            this.chosenCard = this.images[chosenImage];
            var val = this.images[chosenImage];
            
            this.images.splice(chosenImage, 1);
            
            return val;
            
        },
        movingPicker: function(allianceDirection) {
            
            this.socket.emit("movingPicker", allianceDirection);
            this.socket.emit("travelCards", travelCards);
            
            return val;
            
        },
        give: function(x) {
            this.socket.emit("give", x);
            this.socket.emit("playerCards", playerCards);
        },
        
        giveManual: function(x) {
            this.socket.emit("giveManual", x);
            this.socket.emit("playerCards", playerCards);
        },
        supply: function(x) {
            this.socket.emit("supply", x);
            this.socket.emit("shipInv", shipInv);
        },
        chosenShip: function(x) {
            this.socket.emit("chosenShip", x);
            this.socket.emit("shipCards", shipCards);
        },

        chosenShip2: function(x) {
            this.socket.emit("chosenShip2", x);
            this.socket.emit("shipCards2", shipCards2);
        },

        nestedPicker: function() {
            var chosenImage =
                Math.floor(Math.random() *
                           this.nestedImagesArray[0].length);
            this.nestedImagesArray[1] =
                this.nestedImagesArray[0][chosenImage];
            var val =
                this.nestedImagesArray[0][chosenImage];
            
            this.nestedImagesArray[0].splice(chosenImage, 1);
            
            return val;
            
        },
        player1Picker: function() {
            var x = this.player1Index;
            this.player1Chosen = this.player1Inv[x];
            var val = this.player1Inv[x];
        },
        p1GiveP2: function() {
            var x = Math.floor(this.player1Inv.length);
            this.player2Inv.push(this.player1Chosen);
            
            this.player1Chosen = this.player1Inv[x];
            this.player1Inv.splice(this.player1Chosen, 1);
            
            this.player2Last();
            this.player1Prev();
            
        },
        player2Picker: function() {
            var x = this.player2Index;
            this.player2Chosen = this.player2Inv[x];
            var val = this.player2Inv[x];
        },
        player2Last: function () {
            this.player2Index = this.player2Inv.length - 1;
            this.player2Picker();
        },
        player2Next: function () {
            this.player2Index++;
            this.player2Index = this.player2Index % this.player2Inv.length;
            this.player2Picker();
        },
        player2Prev: function () {
            if (this.player2Index === 0) {
                 this.player2Index = this.player2Inv.length
                  }
            this.player2Index = this.player2Index - 1;
            this.player2Picker();
        },
        player1Next: function () {
            this.player1Index++;
            this.player1Index = this.player1Index % this.player1Inv.length;
            this.player1Picker();
        }, 
        
        player1Prev: function () {
            if (this.player1Index === 0) {
                 this.player1Index = this.player1Inv.length
                  }
            this.player1Index = this.player1Index - 1;
            this.player1Picker();
        },
        
        p1ViewPrev: function () {
            console.log("tried to change to previous card");
            if (this.playerCards[0][2] === 0) {
                this.playerCards[0][2] = this.playerCards[0][0].length
            }
            this.playerCards[0][2] = this.playerCards[0][2] - 1;
            
            var x = this.playerCards[0][2];
            this.playerCards[0][1] = this.playerCards[0][0][x];
            console.log("was successful changing to previous card",
                        "player 1 inv = ",playerCards[0][0].length,
                        "player 2 inv = ",playerCards[1][0].length);
        },
        
        p1ViewNext: function () {
            this.playerCards[0][2]++;
            this.playerCards[0][2] = thisplayerCards[0][2] % this.playerCards[0][0].length;
            var x = this.playerCards[0][2];
            this.playerCards[0][1] = this.playerCards[0][0][x];
        }, 
        
        reshuffle: function() {
            
            this.images = [
                require("./z_broken_shuttle.jpg"),
                require("./z_cruiser_patrol.jpg"),
                require("./z_engine_room.jpg"),
                require("./z_minor_tech_diff.jpg"),
                require("./z_the_big_black.jpg")
            ];
            this.picker()
            console.log ("reshuffled");
        },
        
        setRandomDiceData() {            
            const randomDiceNum = Math.floor(Math.random() * 6) + 1;
            this.diceNum = randomDiceNum;
        },
        
        setRandomCardData() {            
            const randomCardNum = Math.floor(Math.random() * 6) + 1;
            this.cardNum = randomCardNum;
        },
        
        setDice() {
            let count = 0;
            const timer = setInterval(() => {
                this.setRandomDiceData();
                if (count >= 6) {
                    clearInterval(timer);
                }
                count += 1;
            }, 150);
        },
        setCard() {
            let count = 0;
            const timer = setInterval(() => {
                this.setRandomCardData();
                if (count >= 6) {
                    clearInterval(timer);
                }
                count += 1;
            }, 150);
        },
        
        move(direction) {
            this.socket.emit("move", direction);
            console.log(JSON.stringify(this.position))
            console.log(JSON.stringify(this.position2))
            console.log(JSON.stringify(this.position3))
            console.log(JSON.stringify(this.position4))
            console.log(JSON.stringify(this.position5))
            console.log(JSON.stringify(this.position6))
            console.log(JSON.stringify(this.position7))
        
        },
        
        move2(direction2) {
            this.socket.emit("move2", direction2);
        },
        move3(direction3) {
            this.socket.emit("move3", direction3);
        },
        move4(direction4) {
            this.socket.emit("move4", direction4);
        },
        move5(direction5) {
            this.socket.emit("move5", direction5);
        },
        move6(direction6) {
            this.socket.emit("move6", direction6);
        },
        move7(direction7) {
            this.socket.emit("move7", direction7);
        },
        moveMoney1(amount1) {
            this.socket.emit("moveMoney1", amount1);
        },
        chosenMood(x) {
            this.socket.emit("chosenMood", x);
        },
        picker(allianceDirection) {
            var chosenImage = Math.floor(Math.random() * this.images.length);
            this.chosenCard = this.images[chosenImage];
            var val = this.images[chosenImage];
            
            this.images.splice(chosenImage, 1);
            this.socket.emit("picker", allianceDirection);
            this.socket.emit("chosenCard", chosenCard);
            this.socket.emit("images", images);
        }
    },
    beforeMount(){
        
        this.player1Next(),
        this.player2Next()
        
    },
    computed: {
        
        getDice() {
            this.setRandomDiceData();
            return `dice dice-${this.diceNum}`;
        },
        getCard() {
            this.setRandomCardData();
            return `card card-${this.cardNum}`;
        },
        
        
    },
    
    
    
    
    watch: {
        
        diceNum() {
            console.log("Dice rolled!", this.test);
        },
 newmessage(value) {
            value ? this.socket.emit('typing', this.name) : socket.emit('stoptyping')
        }
    }
}
</script>



