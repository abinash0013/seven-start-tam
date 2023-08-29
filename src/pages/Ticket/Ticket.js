import React, { useState, useEffect } from 'react';
import "./Ticket.css";
import GameInfo from '../GameInfo/GameInfo'

import { getApiCall, postApiCall, putApiCall } from '../../services/AppSetting';
// import { base } from './../../services/AppSetting';
import { base } from '../../constants/Data.constant';

const Ticket = () => {
  const [ticket, setTicket] = useState([]);
  useEffect(() => {
    ticketCardView();
  }, []);

  const ticketCardView = async () => {
    let result = await getApiCall(base.ticketCardView)
    // console.log("resultcardvieweeq", result[0].ticket_set);
    // setTicket(result[0].ticket_set)
    let convertJSON = JSON.parse(result[0].ticket_set);
    console.log("resultcardvieweeqqq", convertJSON);
    setTicket(convertJSON)
  }

  return (
    <div class="ticketSection">
      <div class="outerContainer">
        <div class="container mx-auto mt-8">
          <div class="containerInfo">
            <div class="containerInfoFirstInnerItem">
              <div class="containerInfoInnerItemSerial">1</div>
              <div class="containerInfoInnerItem">Abinash</div>
            </div>
            <div class="containerInfoInnerItem">Status</div>
          </div>
          <div class="number-card">
            <div class="number">23</div>
            <div class="number">7</div>
            <div class="number">14</div>
            <div class="number">2</div>
            <div class="number">19</div>
            <div class="number">5</div>
            <div class="number">9</div>
            <div class="number">12</div>
            <div class="number">17</div>
            <div class="number">25</div>
            <div class="number">16</div>
            <div class="number">1</div>
            <div class="number">8</div>
            <div class="number">21</div>
            <div class="number">11</div>
            <div class="number">3</div>
            <div class="number">10</div>
            <div class="number">22</div>
            <div class="number">6</div>
            <div class="number">15</div>
            <div class="number">18</div>
            <div class="number">24</div>
            <div class="number">4</div>
            <div class="number">13</div>
            <div class="number">20</div>
            <div class="number">22</div>
            <div class="number">6</div>
          </div>
        </div>
      </div>
      <div class="outerContainer">
        <div class="container mx-auto mt-8">
          <div class="containerInfo">
            <div class="containerInfoFirstInnerItem">
              <div class="containerInfoInnerItemSerial">1</div>
              <div class="containerInfoInnerItem">Abinash</div>
            </div>
            <div class="containerInfoInnerItem">Status</div>
          </div>
          <div class="number-card">
            <div class="number">23</div>
            <div class="number">7</div>
            <div class="number">14</div>
            <div class="number">2</div>
            <div class="number">19</div>
            <div class="number">5</div>
            <div class="number">9</div>
            <div class="number">12</div>
            <div class="number">17</div>
            <div class="number">25</div>
            <div class="number">16</div>
            <div class="number">1</div>
            <div class="number">8</div>
            <div class="number">21</div>
            <div class="number">11</div>
            <div class="number">3</div>
            <div class="number">10</div>
            <div class="number">22</div>
            <div class="number">6</div>
            <div class="number">15</div>
            <div class="number">18</div>
            <div class="number">24</div>
            <div class="number">4</div>
            <div class="number">13</div>
            <div class="number">20</div>
            <div class="number">22</div>
            <div class="number">6</div>
          </div>
        </div>
      </div>
      <div class="outerContainer">
        <div class="container mx-auto mt-8">
          <div class="containerInfo">
            <div class="containerInfoFirstInnerItem">
              <div class="containerInfoInnerItemSerial">1</div>
              <div class="containerInfoInnerItem">Abinash</div>
            </div>
            <div class="containerInfoInnerItem">Status</div>
          </div>
          <div class="number-card">
            <div class="number">23</div>
            <div class="number">7</div>
            <div class="number">14</div>
            <div class="number">2</div>
            <div class="number">19</div>
            <div class="number">5</div>
            <div class="number">9</div>
            <div class="number">12</div>
            <div class="number">17</div>
            <div class="number">25</div>
            <div class="number">16</div>
            <div class="number">1</div>
            <div class="number">8</div>
            <div class="number">21</div>
            <div class="number">11</div>
            <div class="number">3</div>
            <div class="number">10</div>
            <div class="number">22</div>
            <div class="number">6</div>
            <div class="number">15</div>
            <div class="number">18</div>
            <div class="number">24</div>
            <div class="number">4</div>
            <div class="number">13</div>
            <div class="number">20</div>
            <div class="number">22</div>
            <div class="number">6</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ticket