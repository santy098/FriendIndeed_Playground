using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data.SqlClient;

namespace FriendIndeed
{
    /// <summary>
    /// Summary description for WebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WebService1 : System.Web.Services.WebService
    {

        [WebMethod]
        public string GetData()
        {
            String samples = "", DT = "";
            SqlConnection condvg = new SqlConnection("Server=103.21.58.192;Database=frientmf_;Uid=Anoop;Pwd=Anomaan13!!;");
            condvg.Open();
            SqlCommand cmddv = new SqlCommand("SELECT Samples,DateTime FROM TestWorkTable Order by Serial desc", condvg);
            SqlDataReader drdv = cmddv.ExecuteReader();
            while (drdv.HasRows)
            {
                while (drdv.Read())
                {
                    samples += drdv[0].ToString() + ",";
                    DT += drdv[1].ToString() + ",";
                }

                condvg.Close();
                return samples + "<" + DT;
            }
            return "";
        }


        [WebMethod]
        public string InsertData(String DateTime1, String ILDID1, String Samples1, String Cash1, String Reports1, String POP1, String LatLong1, String Zone1)
        {
            SqlConnection conild1 = new SqlConnection("Server=103.21.58.192;Database=frientmf_;Uid=Anoop;Pwd=Anomaan13!!;");
            conild1.Open(); //open the sql connection
            SqlCommand cmdilda1 = new SqlCommand("INSERT INTO TestWorkTable(DateTime, ILDID, Samples, Cash, Reports, POP, LatLong, Zone ) VALUES('" + DateTime1 + "','" + ILDID1 + "', '" + Samples1 + "', '" + Cash1 + "', '" + Reports1 + "','" + POP1 + "' , '" + LatLong1 + "' , '" + Zone1 + "')", conild1);
            cmdilda1.ExecuteNonQuery();
            conild1.Close();
            return "Inserted";
        }

        [WebMethod]
        public string GetChartData()
        {
            String samples = "", zones = "";
            SqlConnection condvg = new SqlConnection("Server=103.21.58.192;Database=frientmf_;Uid=Anoop;Pwd=Anomaan13!!;");
            condvg.Open();
            SqlCommand cmddv = new SqlCommand("SELECT Sum(Samples),Zone FROM TestWorkTable group by Zone", condvg);
            SqlDataReader drdv = cmddv.ExecuteReader();
            while (drdv.HasRows)
            {
                while (drdv.Read())
                {
                    samples += drdv[0].ToString() + ",";
                    zones += drdv[1].ToString() + ",";
                }

                condvg.Close();
                return samples + "<" + zones;
            }
            return "";
        }


    }

}
