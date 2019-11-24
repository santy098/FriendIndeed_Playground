using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Data.SqlClient;

namespace LabBuddy
{
    /// <summary>
    /// Summary description for WSMain
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WSMain : System.Web.Services.WebService
    {
        
        private static TimeZoneInfo INDIAN_ZONE = TimeZoneInfo.FindSystemTimeZoneById("India Standard Time");


        // **************************************************************
        // Login Webmethod for the entry schema of the Entire Solution
        // **************************************************************

        [WebMethod]
        public string LoginWM(string UsrnVal, string PassVal)
        {
            string Username_In = "", Password_In = "", Role_In = "";
            SqlConnection condv = new SqlConnection("Server=103.21.58.192;Database=frientmf_;Uid=Anoop;Pwd=Anomaan13!!;");
            condv.Open();
            SqlCommand cmddv = new SqlCommand("SELECT Username, Password, Role FROM LoginTable WHERE Username = '" + UsrnVal + "' AND Password = '" + PassVal + "'", condv);
            SqlDataReader drdv = cmddv.ExecuteReader();
            while (drdv.HasRows)
            {
                while (drdv.Read())
                {
                    Username_In += drdv[0].ToString();
                    Password_In += drdv[1].ToString();
                    Role_In += drdv[2].ToString();
                }
                condv.Close();
                return Username_In + "," + Password_In + "," + Role_In;
            }
            return "";
        }

        // **************************************************************
        // Deposit the Test Prices into the Database table 
        // **************************************************************


        [WebMethod]
        public string Order_Confirmation(String TestsOrderedA, String TestPricesA, String AmountPayableA, String EntityA, String StatusA, String OrderedByA)
        {
            DateTime DTT = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, INDIAN_ZONE);
            SqlConnection usrregq = new SqlConnection("Server=103.21.58.192;Database=frientmf_;Uid=Anoop;Pwd=Anomaan13!!;");
            usrregq.Open(); //open the sql connection
            SqlCommand usrregcomq = new SqlCommand("INSERT INTO Anoop.LabBuddy_Orders(DateTime,TestsOrdered,TestPrices,AmountPayable,Entity,Status,OrderedBy) VALUES('" + DTT + "','" + TestsOrderedA + "','" + TestPricesA + "','" + AmountPayableA + "','" + EntityA + "','" + StatusA + "','" + OrderedByA + "')", usrregq);
            usrregcomq.ExecuteNonQuery();
            usrregq.Close();
            return "Success";
        }

        [WebMethod]
        public string Order_Confirmation_Renewed(String DateTimeA, String TestsOrderedA, String TestPricesA, String AmountPayableA, String EntityA, String StatusA, String OrderedByA)
        {
            //DateTime DTT = TimeZoneInfo.ConvertTimeFromUtc(DateTime.UtcNow, INDIAN_ZONE);
            SqlConnection usrregq = new SqlConnection("Server=103.21.58.192;Database=frientmf_;Uid=Anoop;Pwd=Anomaan13!!;");
            usrregq.Open(); //open the sql connection
            SqlCommand usrregcomq = new SqlCommand("INSERT INTO Anoop.LabBuddy_Orders(DateTime,TestsOrdered,TestPrices,AmountPayable,Entity,Status,OrderedBy) VALUES('" + DateTimeA + "','" + TestsOrderedA + "','" + TestPricesA + "','" + AmountPayableA + "','" + EntityA + "','" + StatusA + "','" + OrderedByA + "')", usrregq);
            usrregcomq.ExecuteNonQuery();
            usrregq.Close();
            return "Success";
        }

        [WebMethod]
        public string Deposit_TestDetail(string TestNameIN, string GeneralPriceIN, string OfferPriceIN, string EntityIN)
        {

            SqlConnection usrreg = new SqlConnection("Server=103.21.58.192;Database=frientmf_;Uid=Anoop;Pwd=Anomaan13!!;");
            usrreg.Open(); //open the sql connection
            SqlCommand usrregcom = new SqlCommand("INSERT INTO Anoop.MenuPrices(NameOfTest, GeneralPrice, OfferPrice, Entity) VALUES('" + TestNameIN + "','" + GeneralPriceIN + "','" + OfferPriceIN + "','" + EntityIN + "')", usrreg);
            usrregcom.ExecuteNonQuery();
            usrreg.Close();
            return "Success";
        }

        [WebMethod]
        public string Deposit_Test_Price(string TestNameIN, string GeneralPriceIN, string OfferPriceIN, string EntityIN)
        {

            SqlConnection usrreg = new SqlConnection("Server=103.21.58.192;Database=frientmf_;Uid=Anoop;Pwd=Anomaan13!!;");
            usrreg.Open(); //open the sql connection
            SqlCommand usrregcom = new SqlCommand("INSERT INTO Anoop.MenuPrices(NameOfTest, GeneralPrice, OfferPrice, Entity) VALUES('" + TestNameIN + "','" + GeneralPriceIN + "','" + OfferPriceIN + "','" + EntityIN + "')", usrreg);
            usrregcom.ExecuteNonQuery();
            usrreg.Close();
            return "Success";
        }

        [WebMethod]
        public string Get_Test_Details_For_Table_View(string EntityName)
        {
            string NameTest = "", GP = "", OP = "";
            SqlConnection condv = new SqlConnection("Server=103.21.58.192;Database=frientmf_;Uid=Anoop;Pwd=Anomaan13!!;");
            condv.Open();
            SqlCommand cmddv = new SqlCommand("SELECT NameOfTest, GeneralPrice, OfferPrice FROM MenuPrices WHERE Entity = '" + EntityName + "' Order by Serial desc", condv);
            SqlDataReader drdv = cmddv.ExecuteReader();
            while (drdv.HasRows)
            {
                while (drdv.Read())
                {
                    NameTest += drdv[0].ToString() + ",";
                    GP += drdv[1].ToString() + ",";
                    OP += drdv[2].ToString() + ",";
                }
                condv.Close();
                return NameTest + ">" + GP + ">" + OP;
            }
            return "";
        }

        [WebMethod]
        public string GetPrices_Startup_WebMethod(string Entity)
        {
            string NameTest = "", GP = "";
            SqlConnection condv = new SqlConnection("Server=103.21.58.192;Database=frientmf_;Uid=Anoop;Pwd=Anomaan13!!;");
            condv.Open();
            SqlCommand cmddv = new SqlCommand("SELECT NameOfTest, GeneralPrice FROM MenuPrices WHERE Entity = '" + Entity + "' Order by Serial desc", condv);
            SqlDataReader drdv = cmddv.ExecuteReader();
            while (drdv.HasRows)
            {
                while (drdv.Read())
                {
                    NameTest += drdv[0].ToString() + ",";
                    GP += drdv[1].ToString() + ",";
                }
                condv.Close();
                return NameTest + ">" + GP;
            }
            return "";
        }

        [WebMethod]
        public string Check_Individual_Test_Price(string TestCheck)
        {
            string Entity = "", GP = "";
            SqlConnection condv = new SqlConnection("Server=103.21.58.192;Database=frientmf_;Uid=Anoop;Pwd=Anomaan13!!;");
            condv.Open();
            SqlCommand cmddv = new SqlCommand("SELECT GeneralPrice, Entity FROM MenuPrices WHERE NameOfTest = '" + TestCheck + "' Order by Serial desc", condv);
            SqlDataReader drdv = cmddv.ExecuteReader();
            while (drdv.HasRows)
            {
                while (drdv.Read())
                {
                    GP += drdv[0].ToString() + ",";
                    Entity += drdv[1].ToString() + ",";
                }
                condv.Close();
                return GP + ">" + Entity;
            }
            return "";
        }

        [WebMethod]
        public string GetEnrolled_EntitiesList(String Zone)
        {
            string Enrolled_Entities = "";
            SqlConnection condv = new SqlConnection("Server=103.21.58.192;Database=frientmf_;Uid=Anoop;Pwd=Anomaan13!!;");
            condv.Open();
            SqlCommand cmddv = new SqlCommand("SELECT ServiceProvider FROM EnrolledEntities WHERE Zone = '" + Zone + "' Order by Serial desc", condv);
            SqlDataReader drdv = cmddv.ExecuteReader();
            while (drdv.HasRows)
            {
                while (drdv.Read())
                {
                    Enrolled_Entities += drdv[0].ToString() + ",";
                }
                condv.Close();
                return Enrolled_Entities;
            }
            return "";
        }

        [WebMethod]
        public string Get_Order_Details(String OrderNumber)
        {
            string SR = "", DT = "", TO = "", EN = "", ST = "";
            SqlConnection condv = new SqlConnection("Server=103.21.58.192;Database=frientmf_;Uid=Anoop;Pwd=Anomaan13!!;");
            condv.Open();
            SqlCommand cmddv = new SqlCommand("SELECT Serial, DateTime, TestsOrdered, Entity, Status FROM LabBuddy_Orders WHERE Serial = '" + OrderNumber + "'", condv);
            SqlDataReader drdv = cmddv.ExecuteReader();
            while (drdv.HasRows)
            {
                while (drdv.Read())
                {
                    SR = drdv[0].ToString();
                    DT = drdv[1].ToString();
                    TO = drdv[2].ToString();
                    EN = drdv[3].ToString();
                    ST = drdv[4].ToString();
                }
                condv.Close();
                return SR + ">" + DT + ">" + TO + ">" + EN + ">" + ST;
            }
            return "";
        }




    }
}
