import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import TodaysImage from "../../components/TodaysImage";
import fetchApi from "../../utils/fetch";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import LastFiveDaysImages from "../../components/LastFiveDaysImages";



const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [last5DaysImages, setLast5DaysImages] = useState<PostImage[]>([]);

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const dataImage = await fetchApi();
        setTodaysImage(dataImage);
      } catch (error) {
        console.error(error);
        setTodaysImage({});
      }
    };

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const datenow = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");
        const lastFiveDaysImages = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${datenow}`
        );
        setLast5DaysImages(lastFiveDaysImages);
      } catch (error) {
        console.error(error);
      }
    };

    loadLast5DaysImages().catch(null);
    loadTodaysImage().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={last5DaysImages}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 14,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)"
  },
});
