import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Marquee from "react-fast-marquee";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function Home() {
  return (
    <main className="flex flex-col items-center  ">
      <Navbar/>
      <div className="main screen w-full h-screen">
        <p className="text-blue-900 font-semibold text-center">Welcome to BSP Home page! </p>
        <Marquee>
          I can be a React component, multiple React components, or just some text.
        </Marquee>
        <div className="flex justify-center h-full">
          <div className=" flex flex-row w-[150vh] h-full justify-center">
            <div className=" flex-col p-2  border basis-1/4 w-full flex ">
              <div className="flex items-center justify-center">
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-full border px-12 py-1 border-black rounded-sm">Select Language </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Languages</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>English</DropdownMenuItem>
                    <DropdownMenuItem>Hindi</DropdownMenuItem>
                    <DropdownMenuItem>German</DropdownMenuItem>
                    <DropdownMenuItem>Japanes</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="flex flex-col items-center justify-center">
                <h1 className="uppercase text-center font-bold text-blue-900 mt-8 text-lg">Chairman&apos;s Message</h1>
                <div className="Box_News bg-gray-100 rounded-sm px-2 py-6 mt-4 w-full text-sm">
                  Latest news comes here
              </div>
              </div>

              <div>
              <h1 className="text-left text-black mt-8 text-3xl">Latest News</h1>
              <div className="Box_News bg-gray-100 rounded-sm px-2 py-6 mt-4 text-sm">
                <a href="/#" className="text-blue-400">
                  Click to view latest edition of Bhilai Reflections #21 
                </a>
                  {' '}video news capsule of Bhilai Steel Plant.
              </div>
              </div>
            </div>


            <div className="p-2 border basis-2/4 flex flex-col justify-start items-center max-w-[100vh]">
              <div className="my-6 flex-row flex w-full gap-x-4">
                <div className="flex flex-1  justify-center items-start">      
                  <table className="min-w-full border border-gray-300 text-center"> 
                <thead>
                  {/* <tr>
                      <th colSpan="2" className="border-b-2 border-gray-300 underline font-serif text-purple-800 font-bold text-sm">PLANT PRODUCTION (PREV DAY)</th>
                  </tr> */}
                  <tr>
                      <th className="bg-blue-200 border-r-2 border-gray-300">Category</th>
                      <th className="bg-blue-200">Tons</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border border-gray-300 text-left">Hot Metal</td>
                      <td className="border border-gray-300 text-right">15751</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 text-left">Coke Pushing</td>
                      <td className="border border-gray-300 text-right">780</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 text-left">Sinter Prod.</td>
                      <td className="border border-gray-300 text-right">41610</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 text-left">Crude Steel</td>
                      <td className="border border-gray-300 text-right">15250</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 text-left">Fin. Steel</td>
                      <td className="border border-gray-300 text-right">12028</td>
                  </tr>
                  <tr>
                      <td className="border border-gray-300 text-left">Sal. Steel</td>
                      <td className="border border-gray-300 text-right">12413</td>
                  </tr>
                </tbody>
                  </table>
                </div>
                <div className="flex flex-1 justify-center items-start ">
                  <table className="min-w-full border border-gray-300 text-center ">
                <thead>
                    {/* <tr>
                        <th colSpan="2" className=" border-b-2 border-gray-300 underline font-serif text-purple-800 font-bold  text-sm">PENDING INCIDENTS</th>
                    </tr> */}
                    <tr>
                        <th className="bg-blue-200 border-r-2 border-gray-300">Category</th>
                        <th className="bg-blue-200 ">Nos.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-300 text-left">FIRE</td>
                        <td className="border border-gray-300 text-right">34</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 text-left">FIRST AID CASE</td>
                        <td className="border border-gray-300 text-right">23</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 text-left">LOST TIME INJURY</td>
                        <td className="border border-gray-300 text-right">16</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 text-left">NEAR MISS</td>
                        <td className="border border-gray-300 text-right">1489</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 text-left">NM on common road</td>
                        <td className="border border-gray-300 text-right">638</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 text-left">OTHERS</td>
                        <td className="border border-gray-300 text-right">85</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 text-left">PROPERTY DAMAGE</td>
                        <td className="border border-gray-300 text-right">7</td>
                    </tr>
                </tbody>
                  </table>
                </div>
              </div>

            <div className="my-6 flex flex-col w-full gap-3 items-start">
              <div className=" text-red-800 font-bold">
                Dispatch Summary(Tons) - Based on rakes marked by T&D on 03rd June 24
              </div>
              <div className="flex w-full gap-x-3 items-center justify-center">
              <table className="table-auto w-full border">
              <thead className="text-xs text-nowrap uppercase bg-blue-200">
                <tr>
                  <th scope="col" className="border px-2 py-1 text-right">Period</th>
                  <th scope="col" className="border px-2 py-1 text-right">Semis</th>
                  <th scope="col" className="border px-2 py-1 text-right">Finished</th>
                  <th scope="col" className="border px-2 py-1 text-right">Saleable</th>
                  <th scope="col" className="border px-2 py-1 text-right">Pig Iron</th>
                  <th scope="col" className="border px-2 py-1 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="text-sm text-nowrap">
                <tr>
                  <td className="border px-2 py-1 text-right">On Date</td>
                  <td className="border px-2 py-1 text-right">3012</td>
                  <td className="border px-2 py-1 text-right">9677</td>
                  <td className="border px-2 py-1 text-right">12689</td>
                  <td className="border px-2 py-1 text-right">660</td>
                  <td className="border px-2 py-1 text-right">13349</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-right">Month</td>
                  <td className="border px-2 py-1 text-right">8502</td>
                  <td className="border px-2 py-1 text-right">28593</td>
                  <td className="border px-2 py-1 text-right">37095</td>
                  <td className="border px-2 py-1 text-right">1130</td>
                  <td className="border px-2 py-1 text-right">38225</td>
                </tr>
              </tbody>
              </table>

              <table className="table-auto w-full">
              <thead className="text-xs uppercase bg-blue-200 text-nowrap">
                <tr>
                  <th scope="col" className="border px-2 py-1 text-right">Product</th>
                  <th scope="col" className="border px-2 py-1 text-right">On Date</th>
                  <th scope="col" className="border px-2 py-1 text-right">Month Cumm.</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border px-2 py-1 text-right">Flat</td>
                  <td className="border px-2 py-1 text-right">2786</td>
                  <td className="border px-2 py-1 text-right">9028</td>
                </tr>
                <tr>
                  <td className="border px-2 py-1 text-right">Long</td>
                  <td className="border px-2 py-1 text-right">5682</td>
                  <td className="border px-2 py-1 text-right">9602</td>
                </tr>
              </tbody>
              </table>
              </div>
            </div>

            <div className="my-6 flex flex-col w-full ">
              <div>
                <p className="text-center w-full">Energy Performance</p>
                <p className="text-center w-full">Date : 03-06-2024</p>
              </div>
              <div className="flex w-full gap-x-3  overflow-x-scroll">
                <div>
                  <table className="min-w-full border border-gray-300 text-center"> 
                <thead>
                  <tr>
                      <th className="bg-blue-200 border-r-2 border-gray-300">Parameter</th>
                      <th className="bg-blue-200">Target</th>
                      <th className="bg-blue-200">On Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Energy Rate(GCal/TCS)</td>
                      <td className="border text-nowrap border-gray-300 text-right">6.3</td>
                      <td className="border text-nowrap border-gray-300 text-right">6.499</td>
                  </tr>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Crude Steel Prodn. (Tons)</td>
                      <td className="border text-nowrap border-gray-300 text-right">16645</td>
                      <td className="border text-nowrap border-gray-300 text-right">15250</td>
                  </tr>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Saleable Steel Prodn. (Tons) </td>
                      <td className="border text-nowrap border-gray-300 text-right"> 320</td>
                      <td className="border text-nowrap border-gray-300 text-right">12413</td>
                  </tr>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Coke Rate(Kg/THM) </td>
                      <td className="border text-nowrap border-gray-300 text-right">429</td>
                      <td className="border text-nowrap border-gray-300 text-right">430</td>
                  </tr>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Sp. Power Cons.(KWH/TCS)</td>
                      <td className="border text-nowrap border-gray-300 text-right">418</td>
                      <td className="border text-nowrap border-gray-300 text-right">449</td>
                  </tr>
                </tbody>
                  </table>
                  </div>


                <div>
                <table className="min-w-full border border-gray-300 text-center"> 
                <thead>
                  <tr>
                      <th className="bg-blue-200 border-r-2 border-gray-300">Parameter</th>
                      <th className="bg-blue-200">Target</th>
                      <th className="bg-blue-200">On Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Energy Rate(GCal/TCS)</td>
                      <td className="border text-nowrap border-gray-300 text-right">6.3</td>
                      <td className="border text-nowrap border-gray-300 text-right">6.499</td>
                  </tr>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Crude Steel Prodn. (Tons)</td>
                      <td className="border text-nowrap border-gray-300 text-right">16645</td>
                      <td className="border text-nowrap border-gray-300 text-right">15250</td>
                  </tr>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Saleable Steel Prodn. (Tons) </td>
                      <td className="border text-nowrap border-gray-300 text-right"> 320</td>
                      <td className="border text-nowrap border-gray-300 text-right">12413</td>
                  </tr>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Coke Rate(Kg/THM) </td>
                      <td className="border text-nowrap border-gray-300 text-right">429</td>
                      <td className="border text-nowrap border-gray-300 text-right">430</td>
                  </tr>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Sp. Power Cons.(KWH/TCS)</td>
                      <td className="border text-nowrap border-gray-300 text-right">418</td>
                      <td className="border text-nowrap border-gray-300 text-right">449</td>
                  </tr>
                </tbody>
                  </table>
                  </div>



                <div>
                <table className="min-w-full border border-gray-300 text-center"> 
                <thead>
                  <tr>
                      <th className="bg-blue-200 border-r-2 border-gray-300">Parameter</th>
                      <th className="bg-blue-200">Target</th>
                      <th className="bg-blue-200">On Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Energy Rate(GCal/TCS)</td>
                      <td className="border text-nowrap border-gray-300 text-right">6.3</td>
                      <td className="border text-nowrap border-gray-300 text-right">6.499</td>
                  </tr>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Crude Steel Prodn. (Tons)</td>
                      <td className="border text-nowrap border-gray-300 text-right">16645</td>
                      <td className="border text-nowrap border-gray-300 text-right">15250</td>
                  </tr>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Saleable Steel Prodn. (Tons) </td>
                      <td className="border text-nowrap border-gray-300 text-right"> 320</td>
                      <td className="border text-nowrap border-gray-300 text-right">12413</td>
                  </tr>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Coke Rate(Kg/THM) </td>
                      <td className="border text-nowrap border-gray-300 text-right">429</td>
                      <td className="border text-nowrap border-gray-300 text-right">430</td>
                  </tr>
                  <tr>
                      <td className="border text-nowrap border-gray-300 text-left">Sp. Power Cons.(KWH/TCS)</td>
                      <td className="border text-nowrap border-gray-300 text-right">418</td>
                      <td className="border text-nowrap border-gray-300 text-right">449</td>
                  </tr>
                </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
            
            
            




            <div className="p-2 border basis-1/4 w-full flex  flex-col justify-start gap-2">
              <div className="bg-cover w-68 border border-gray-300 rounded-sm h-fit overflow-hidden">
              <p id="para" className="w-80 h-9 pt-1 text-center bg-red-700 text-white font-bold text-lg overflow-y-visible">Safety Menu</p>
              <table className="w-72 border-separate text-sm pl-1 pt-1.5">
                <tbody>
                  <tr>
                      <td><a className="pl-2.5" href="http://edpas21:8080/websafety/" target="_blank">BBS</a></td>
                      <td><a className="pl-2.5" href="http://bspweb:91/suraksha/closed_pair.jsp" target="_blank">Open Fatality</a></td>
                  </tr>
                  <tr>
                      <td><a className="pl-2.5" href="http://bspweb:91/suraksha/login.jsp" target="_blank">e-Suraksha</a></td>
                      <td><a className="pl-2.5" href="http://edpas1:7777/home/safety/safety_links/safety_feed/log.jsp" target="_blank">Suggestions</a></td>
                  </tr>
                  <tr>
                      <td><a className="pl-2.5" href="../emergency/" target="_blank">Emergency Plan</a></td>
                  </tr>
                </tbody>
              </table>
              </div>

            <div className="bg-cover w-68 h-45 border border-gray-200 rounded-sm mt-1.5">
                <p className="text-center mt-0 pt-1 pl-2.5 text-lg font-semibold mb-0">
                    <span className="text-purple-800">Plant</span> 
                    <span className="text-blue-400">Production</span>
                </p>
                <hr className="border-t border-dashed border-black my-2.5" />
                <table className="w-68 border-separate text-sm pl-1.5 mt-0">
                <tbody>
                    <tr className="mb-2">
                        <td className="w-36 h-5"><a className="pl-2.5 text-gray-800" href="http://10.145.8.31:3000/users/sign_in" target="_blank">ED(W)Dashboard</a></td>
                        <td className="w-37"><a className="pl-2.5 text-gray-800" href="http://bizit/business_view/erp_mes_report2/mis.jsp" target="_blank">Biz View</a></td>
                    </tr>
                    <tr className="mb-2">
                        <td className="h-5"><a className="pl-2.5 text-gray-800" href="http://edpas7:7777/home/epp/Energy/energy_perf_daily_ach_1.jsp" target="_blank">Energy.Perf</a></td>
                        <td><a className="pl-2.5 text-gray-800" href="http://trams/rake/" target="_blank">e-Rake</a></td>
                    </tr>
                    <tr className="mb-1.5">
                        <td className="h-5"><a className="pl-2.5 text-gray-800" href="http://bspironview/bf8_dgt/coh_zone_3d.jsp" target="_blank">Mahamaya.Digital</a></td>
                        <td><a className="pl-2.5 text-gray-800" href="http://emsweb:7001/BSP-EMS/GAS_NETWORK.jsp" target="_blank">Gas NW</a></td>
                    </tr>
                    <tr className="mb-1.5">
                        <td className="h-5"><a className="pl-2.5 text-gray-800" href="http://plantview.sail-bhilaisteel.com/pc_status.asp" target="_blank">Plant.at.a.Glance</a></td>
                        <td><a className="pl-2.5 text-gray-800" href="http://10.145.11.135/load_flow.jsp" target="_blank">Load Flow</a></td>
                    </tr>
                    <tr>
                        <td className="h-5"><a className="pl-2.5 text-gray-800" href="http://10.145.8.25:8080/dashboard/BSP/pc_rep.jsp" target="_blank">Plant.Control.Report</a></td>
                        <td><a className="pl-2.5 text-gray-800" href="http://plantview.sail-bhilaisteel.com/pc_status3.asp" target="_blank">Uni.Plant.View</a></td>
                    </tr>
                    <tr>
                              <td className="h-5"><a className="pl-2.5 text-gray-800" href="../ppc/index.php/en/" target="_blank">PPC</a></td>
                          </tr>
                      </tbody>
                  </table>
              </div>

            <div className="bg-cover w-68 h-fit border border-gray-200 rounded-sm mt-1.5">
            <p className="text-center mt-0 pt-1 text-orange-600 pl-2.5 text-lg font-semibold mb-0">
                Top Web <span className="text-gray-600">Links</span>
            </p>
            <hr className="border-t border-dashed border-black my-2.5" />
            <table className="w-68 border-separate text-sm pl-1.5 mt-0">
                <tbody>
                    <tr>
                        <td className="pl-2.5"><a className="text-gray-800" href="../cnitweb/index.php/en/" target="_blank">C&amp;IT</a></td>
                        <td className="pl-2.5"><a className="text-gray-800" href="http://bspweb/cmms/bday/bday_wish.jsp" target="_blank">Birthday</a></td>
                        <td className="pl-2.5"><a className="text-gray-800" href="http://incos/incos/" target="_blank">INCOS</a></td>
                    </tr>
                    <tr>
                        <td className="pl-2.5"><a className="text-gray-800" href="../rules" target="_blank">Rules</a></td>
                        <td className="pl-2.5"><a className="text-gray-800" href="http://mdmserver:8082/gatepass/loga.jsp" target="_blank">Gatepass</a></td>
                        <td className="pl-2.5"><a className="text-gray-800" href="../onm" target="_blank">O&amp;M</a></td>
                    </tr>
                    <tr>
                        <td className="pl-2.5"><a className="text-gray-800" href="../bspfin" target="_blank">Cost</a></td>
                        <td className="pl-2.5"><a className="text-gray-800" href="../utkarsh" target="_blank">ERP/MES</a></td>
                        <td className="pl-2.5"><a className="text-gray-800" href="../stds" target="_blank">Standards</a></td>
                    </tr>
                    <tr>
                        <td className="pl-2.5"><a className="text-gray-800" href="http://10.145.2.84:8080/edpr/dpr/beyond/index.jsp" target="_blank">eDPR</a></td>
                        <td className="pl-2.5"><a className="text-gray-800" href="https://eproc.sail-bhilaisteel.com/irj/portal" target="_blank">e-Proc</a></td>
                        <td className="pl-2.5"><a className="text-gray-800" href="http://bspmes/SCO/index.jsp" target="_blank">MES</a></td>
                    </tr>
                    <tr>
                        <td className="pl-2.5"><a className="text-gray-800" href="../ecell" target="_blank">Exe Cell</a></td>
                        <td className="pl-2.5"><a className="text-gray-800" href="http://incos/incos/en/misc/ease-of-use/145-new-webmail-with-groupware-features" target="_blank">BSP Mail</a></td>
                        <td className="pl-2.5"><a className="text-gray-800" href="http://email.gov.in/" target="_blank">Webmail</a></td>
                    </tr>
                </tbody>
            </table>
            <p className="text-center mt-0 pt-1 text-orange-600 pl-2.5 text-lg font-semibold mb-0">
                Useful <span className="text-gray-600">Links</span>
            </p>
            <hr className="border-t border-dashed border-black my-2.5" />
            <table className="w-68 border-separate text-sm pl-1.5 mt-0">
                <tbody>
                    <tr>
                        <td className="pl-2.5"><a className="text-gray-800" href="http://cmmsftp/servlet/UTILITY" target="_blank">Utility Forms</a></td>
                        <td className="pl-2.5"><a className="text-gray-800" href="http://cmmsftp/bsp/bsp-cal-2024.jpg" target="_blank">SAIL Calendar</a></td>
                    </tr>
                    <tr>
                        <td className="pl-2.5"><a className="text-gray-800" href="https://bspopac.libsys10.in/home/dashboard" target="_blank">Central Library</a></td>
                        <td className="pl-2.5"><a className="text-gray-800" href="http://cmmsftp/rules/r-web/data/R-Forms/Rules_forms.htm" target="_blank">Sankalan Forms</a></td>
                    </tr>
                </tbody>
            </table>
            <p className="text-center mt-0 pt-1 text-orange-600 pl-2.5 text-base font-semibold mb-0">
                <a className="text-orange-600" href="http://edpas21:8080/ccit/" target="_blank">ITCC</a> ||
                <a className="text-gray-800" href="http://mclweb:8080/cas/new_CAMS/login_ca.html" target="_blank">PC Complaints</a>
            </p>
            </div>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
